import { trpc } from '$lib/trpc/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	return {
		package: trpc(event).fetchPackage.query()
	};
};
