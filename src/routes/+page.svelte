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
	<div class="flex flex-col overflow-x-auto">
		<table>
			<thead>
				<tr>
					<th class="text-left font-bold">Lock Hash</th>
					<th class="text-left font-bold">ENR</th>
					<th class="text-left font-bold hidden sm:table-cell"># of Validators</th>
					<th class="text-left font-bold hidden sm:table-cell">Version</th>
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
						<td class="hidden sm:table-cell">{clusterLock.cluster_definition.num_validators}</td>
						<td class="hidden sm:table-cell">{clusterLock.cluster_definition.version}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>
