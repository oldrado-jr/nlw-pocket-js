import { env } from '../config/env';

export const createGoalCompletion = async (goalId: string) => {
  await fetch(`${env.VITE_API_BASE_URL}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  });
};
