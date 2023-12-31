import { trpc } from '$lib/trpc/browserClient';
import type { PageLoad } from './$types';

// 👇 this method will be invoked on BOTH the server and the client, as needed ⚠️
export const load: PageLoad = (event) => {
	return {
		greeting: trpc(event).greeting.query(),
		hasil: trpc(event).createTodo.query({ done: true, text: 'sdfdsfsdfsdfsdf' })
	};
};
