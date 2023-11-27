import prisma from '$lib/prisma';
import { auth } from '$lib/trpc/middleware';
import { t } from '$lib/trpc/init';
import { z } from 'zod';

export const authors = t.router({
	list: t.procedure
		.use(auth)
		.input(z.string().optional())
		.query(({ input }) =>
			prisma.user.findMany({
				select: {
					id: true,
					name: true,
					email: true
				},
				where: input ? { OR: [{ name: { contains: input } }] } : undefined
			})
		)
});
