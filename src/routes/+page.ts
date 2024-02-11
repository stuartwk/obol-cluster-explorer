import type { DistributedValidatorClusters } from '$lib/types';
import type { LoadEvent } from '@sveltejs/kit';

export const config = {
	runtime: 'edge'
};

export const load = async ({ fetch }: LoadEvent) => {
	const response = await fetch('https://api.obol.tech/lock/network/mainnet', {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

	const json = (await response.json()) as unknown as DistributedValidatorClusters;

	// sort by cluster_definition.name
	json.cluster_locks.sort((a, b) =>
		a.cluster_definition.name.localeCompare(b.cluster_definition.name)
	);

	return {
		distributedValidatedClusters: json
	};
};
