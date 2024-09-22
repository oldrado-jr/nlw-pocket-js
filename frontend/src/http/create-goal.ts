import { env } from '../config/env';

type CreateGoalRequest = {
  title: string;
  desiredWeeklyFrequency: number;
};

export const createGoal = async ({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) => {
  await fetch(`${env.VITE_API_BASE_URL}/goals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  });
};
