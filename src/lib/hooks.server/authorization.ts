import { redirect, type Handle } from '@sveltejs/kit';

const authorization: Handle = async ({ event, resolve }) => {
	// Protect any routes under /authenticated
	if (event.url.pathname.startsWith('/authenticated')) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/auth');
		}
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
};

export default authorization;
