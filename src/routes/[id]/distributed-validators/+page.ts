import type { ClusterLock, ValidatorStates } from '$lib/types';
import { error, type LoadEvent } from '@sveltejs/kit';

export const load = async ({ fetch, params }: LoadEvent) => {
	// get id from the URL
	const { id } = params;
	if (!id) {
		error(404, { message: 'No ID found' });
	}

	const clusterRequest = fetch(`https://api.obol.tech/lock/${id}`);
	const validatorStatesRequest = fetch(`https://api.obol.tech/state/${id}`);

	const [clusterRes, validatorStatesRes] = await Promise.all([
		clusterRequest,
		validatorStatesRequest
	]);

	if (clusterRes.status !== 200 || validatorStatesRes.status !== 200) {
		error(404, { message: `Error fetching data for "${id}"` });
	}

	const [clusterLock, validatorStates] = await Promise.all([
		clusterRes.json() as unknown as ClusterLock,
		validatorStatesRes.json() as unknown as ValidatorStates
	]);

	// const json = (await clusterRequest.json()) as unknown as ClusterLock;

	return {
		clusterLock: clusterLock,
		validatorStates: validatorStates
	};
};
