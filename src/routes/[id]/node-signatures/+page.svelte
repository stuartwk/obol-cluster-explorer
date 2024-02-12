<script lang="ts">
	import ClusterHeader from '$lib/components/ClusterHeader.svelte';
	import TableData from '$lib/components/TableData.svelte';
	import TableRow from '$lib/components/TableRow.svelte';
	import type { ClusterLock } from '$lib/types';
	import { page } from '$app/stores';
	import NavPill from '$lib/components/NavPill.svelte';

	export let data: {
		clusterLock: ClusterLock;
	};

	const { id } = $page.params;

	const { clusterLock } = data;
</script>

<main>
	<ClusterHeader {clusterLock} />

	<nav class="mb-8">
		<NavPill url={`/${id}/cluster-definition`} label="Cluster" />
		<NavPill url={`/${id}/distributed-validators`} label="Validators" />
		<NavPill url={`/${id}/node-signatures`} active={true} label="Node Signatures" />
	</nav>

	<div id="node-signatures" class="flex flex-col mb-8">
		<h2 class="text-2xl">Node Signatures</h2>

		{#if (clusterLock.node_signatures && clusterLock.node_signatures.length === 0) || !clusterLock.node_signatures}
			<p>No node signatures found.</p>
		{:else}
			<table class="mb-4">
				<thead>
					<tr>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#each clusterLock.node_signatures as nodeSignature}
						<TableRow>
							<TableData classList="break-all">{nodeSignature}</TableData>
						</TableRow>
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
</main>
