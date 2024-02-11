import type { DistributedValidatorClusters } from '$lib/types';

export const load = async () => {
	try {
		console.log('loading distributed-validators');
		const response = await fetch('https://api.obol.tech/lock/network/mainnet');
		const json = (await response.json()) as unknown as DistributedValidatorClusters;

		// sort by cluster_definition.name
		json.cluster_locks.sort((a, b) =>
			a.cluster_definition.name.localeCompare(b.cluster_definition.name)
		);

		return {
			distributedValidatedClusters: json
		};
	} catch (error) {
		console.error('Error loading distributed-validators', error);
		return {
			error
		};
	}
};
