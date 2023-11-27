import prisma from '$lib/prisma';
import delay from 'delay';
import { z } from 'zod';
import { t } from './init';
import { authors } from './routes/author';

export const router = t.router({
	authors,
	fetchPackage: t.procedure.query(async () => {
		return await prisma.package.findMany();
	}),
	createTodo: t.procedure
		.input(
			z.object({
				done: z.boolean(),
				text: z.string()
			})
		)
		.query(async (opts) => {
			const { done, text } = opts.input;
			const response = await prisma.todo.create({
				data: {
					created_at: new Date(),
					done,
					text
				}
			});

			console.log(response);
		}),
	greeting: t.procedure.query(async () => {
		await delay(500); // 👈 simulate an expensive operation
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	})
});

export type Router = typeof router;
