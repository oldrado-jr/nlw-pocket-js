import { env } from '../config/env';

export const deleteGoalCompletion = async (id: string) => {
  await fetch(`${env.VITE_API_BASE_URL}/completions/${id}`, {
    method: 'DELETE',
  });
};
