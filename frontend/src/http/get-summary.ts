import { env } from '../config/env';

type SummaryResponse = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: string;
    }[]
  >;
};

export const getSummary = async (): Promise<SummaryResponse> => {
  const response = await fetch(`${env.VITE_API_BASE_URL}/summary`);
  const data = await response.json();

  return data?.summary;
};
