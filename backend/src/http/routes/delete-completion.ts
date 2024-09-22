import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';

import { deleteGoalCompletion } from '../../functions/delete-goal-completion';

export const deleteCompletionRoute: FastifyPluginAsyncZod = async (app) => {
  app.delete(
    '/completions/:id',
    {
      schema: {
        params: z.object({
          id: z.string().cuid2(),
        }),
      },
    },
    async (request) => {
      const { id } = request.params;

      await deleteGoalCompletion({ id });
    },
  );
};
