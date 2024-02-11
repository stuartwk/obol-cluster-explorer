<script lang="ts">
	import { goto } from '$app/navigation';
	import type { DistributedValidatorClusters } from '$lib/types';
	import Container from '$lib/components/Container.svelte';
	import { truncateAddress } from '$lib/utils';

	export let data: {
		distributedValidatedClusters: DistributedValidatorClusters;
	};

	let distributedValidatedClusters = data.distributedValidatedClusters ?? [];
	const clusterLocks = distributedValidatedClusters.cluster_locks;

	const navigate = (lockHash: string) => {
		goto(`/${lockHash}`);
	};
</script>

<main>
	<div class="flex flex-col">
		<table>
			<thead>
				<tr>
					<th class="text-left font-bold">Lock Hash</th>
					<th class="text-left font-bold">ENR</th>
					<th class="text-left font-bold"># of Validators</th>
					<th class="text-left font-bold">Version</th>

					<!-- <th>Validators</th> -->
					<!-- <th></th> -->
				</tr>
			</thead>

			<tbody>
				{#each clusterLocks as clusterLock}
					<tr
						class="hover:bg-green-500 hover:text-black cursor-pointer"
						on:click={() => navigate(clusterLock.lock_hash)}
					>
						<td>{truncateAddress(clusterLock.lock_hash)}</td>
						<td>{clusterLock.cluster_definition.name}</td>
						<td>{clusterLock.cluster_definition.num_validators}</td>
						<td>{clusterLock.cluster_definition.version}</td>

						<!-- <td>{clusterLock.validators.length}</td> -->
						<!-- <td>
                <button on:click={() => goto(`/clusters/${clusterLock.lock_hash}`)}>View</button>
              </td> -->
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>
