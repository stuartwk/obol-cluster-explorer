<script lang="ts">
	import type { ClusterLock } from '$lib/types';
	import TableData from './TableData.svelte';
	import TableRow from './TableRow.svelte';

	export let clusterLock: ClusterLock;
</script>

<a href="/" class="mb-2"><span class="text-green-500 mr-1">←</span>Back</a>

<h1 class="text-2xl">Cluster Details: {clusterLock.cluster_definition.name}</h1>
<table class="mb-8">
	<thead>
		<tr>
			<th></th>
			<th></th>
		</tr>
	</thead>
	<TableRow>
		<TableData>Lock Hash</TableData>
		<TableData classList="break-all">{clusterLock.lock_hash}</TableData>
	</TableRow>

	<TableRow>
		<TableData>Signature Aggregate</TableData>
		<TableData classList="break-all">{clusterLock.signature_aggregate}</TableData>
	</TableRow>
</table>
