import fastifyCors from '@fastify/cors';
import fastify from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';

import { env } from '../config/env';
import { createCompletionRoute } from './routes/create-completion';
import { createGoalRoute } from './routes/create-goal';
import { deleteCompletionRoute } from './routes/delete-completion';
import { getPendingGoalsRoute } from './routes/get-pending-goals';
import { getWeekSummaryRoute } from './routes/get-week-summary';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, { origin: '*' });

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalRoute);
app.register(createCompletionRoute);
app.register(getPendingGoalsRoute);
app.register(getWeekSummaryRoute);
app.register(deleteCompletionRoute);

const start = async () => {
  try {
    await app.listen({ port: env.PORT, host: env.HOST });
    console.log(`Server listening on ${env.API_BASE_URL}`);
  } catch (error) {
    console.error(error);
  }
};

start();
