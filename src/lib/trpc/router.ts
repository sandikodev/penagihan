import prisma from '$lib/prisma';
import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import delay from 'delay';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
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
