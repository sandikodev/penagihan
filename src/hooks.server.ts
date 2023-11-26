import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import GitHub from '@auth/core/providers/github';
import { SvelteKitAuth } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { createTRPCHandle } from 'trpc-sveltekit';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '$lib/prisma';
import authorization from '$lib/hooks.server/authorization';

export const handle: Handle = sequence(
	SvelteKitAuth({
		adapter: PrismaAdapter(prisma),
		providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
	}),
	authorization,
	createTRPCHandle({ router, createContext })
);
