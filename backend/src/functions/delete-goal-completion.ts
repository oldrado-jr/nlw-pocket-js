import { eq } from 'drizzle-orm';

import { db } from '../db';
import { goalCompletions, goals } from '../db/schema';

type DeleteGoalCompletionRequest = {
  id: string;
};

export const deleteGoalCompletion = async ({
  id,
}: DeleteGoalCompletionRequest) => {
  const result = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.id, id))
    .returning({ id: goals.id });

  const [deletedGoalCompletion] = result;

  if (!deletedGoalCompletion) {
    throw new Error('Goal completion not found!');
  }

  return { deletedGoalCompletion };
};
