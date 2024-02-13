import type { ClusterLock } from '$lib/types';
import type { LoadEvent } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }: LoadEvent) => {
	// get id from the URL
	const { id } = params;
	if (!id) {
		error(404, { message: 'No ID found' });
	}

	const response = await fetch(`https://api.obol.tech/lock/${id}`);

	if (response.status !== 200) {
		error(404, { message: `Error fetching data for "${id}"` });
	}

	const json = (await response.json()) as unknown as ClusterLock;

	return {
		clusterLock: json
	};
};
