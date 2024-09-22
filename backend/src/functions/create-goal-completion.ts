import dayjs from 'dayjs';
import { and, count, eq, gte, lte, sql } from 'drizzle-orm';

import { db } from '../db';
import { goalCompletions, goals } from '../db/schema';

type CreateGoalCompletionRequest = {
  goalId: string;
};

export const createGoalCompletion = async ({
  goalId,
}: CreateGoalCompletionRequest) => {
  const firstDayOfWeek = dayjs().startOf('week').toDate();
  const lastDayOfWeek = dayjs().endOf('week').toDate();

  const goalsCompletionCounts = db.$with('goals_completion_counts').as(
    db
      .select({
        goalId: goalCompletions.goalId,
        completionCount: count(goalCompletions.id).as('completion_count'),
      })
      .from(goalCompletions)
      .where(
        and(
          gte(goalCompletions.createdAt, firstDayOfWeek),
          lte(goalCompletions.createdAt, lastDayOfWeek),
          eq(goalCompletions.goalId, goalId),
        ),
      )
      .groupBy(goalCompletions.goalId),
  );

  const result = await db
    .with(goalsCompletionCounts)
    .select({
      desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
      completionCount:
        sql /*sql*/`COALESCE(${goalsCompletionCounts.completionCount}, 0)`.mapWith(
          Number,
        ),
    })
    .from(goals)
    .leftJoin(goalsCompletionCounts, eq(goalsCompletionCounts.goalId, goals.id))
    .where(eq(goals.id, goalId))
    .limit(1);

  const [{ completionCount, desiredWeeklyFrequency }] = result;

  if (completionCount >= desiredWeeklyFrequency) {
    throw new Error('Goal already completed this week!');
  }

  const insertResult = await db
    .insert(goalCompletions)
    .values({ goalId })
    .returning();

  const [goalCompletion] = insertResult;

  return { goalCompletion };
};
