import type { ClusterLock } from '$lib/types';
import type { LoadEvent } from '@sveltejs/kit';

export const load = async ({ params }: LoadEvent) => {
	// get id from the URL
	const { id } = params;
	if (!id) {
		throw new Error('No ID found');
	}

	const response = await fetch(`https://api.obol.tech/lock/${id}`);
	const json = (await response.json()) as unknown as ClusterLock;

	return {
		clusterLock: json
	};
};

// node-signatures
// node-signatures
