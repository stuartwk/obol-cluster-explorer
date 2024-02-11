import type { LoadEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }: LoadEvent) => {
	// get id from the URL
	const { id } = params;
	if (!id) {
		throw new Error('No ID found');
	}

	redirect(302, `/${id}/cluster-definition`);
};
