import { env } from '../config/env';

type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}[];

export const getPendingGoals = async (): Promise<PendingGoalsResponse> => {
  const response = await fetch(`${env.VITE_API_BASE_URL}/pending-goals`);
  const data = await response.json();

  return data?.pendingGoals;
};
