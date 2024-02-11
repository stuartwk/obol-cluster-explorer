<script lang="ts">
	import ClusterHeader from '$lib/components/ClusterHeader.svelte';
	import TableData from '$lib/components/TableData.svelte';
	import TableRow from '$lib/components/TableRow.svelte';
	import type { ClusterLock } from '$lib/types';
	import { page } from '$app/stores';
	import NavPill from '$lib/components/NavPill.svelte';
	import TableHeader from '$lib/components/TableHeader.svelte';

	export let data: {
		clusterLock: ClusterLock;
	};

	const { id } = $page.params;

	const { clusterLock } = data;
</script>

<main>
	<ClusterHeader {clusterLock} />

	<nav class="mb-8">
		<NavPill url={`/${id}/cluster-definition`} active={true} label="Cluster Definition" />
		<NavPill url={`/${id}/distributed-validators`} label="Distributed Validators" />
		<NavPill url={`/${id}/node-signatures`} label="Node Signatures" />
	</nav>

	<div class="flex flex-col mb-8">
		<TableHeader>Cluster Definition</TableHeader>

		<table>
			<thead>
				<tr>
					<th></th>
					<th></th>
				</tr>
			</thead>

			<tbody>
				<TableRow>
					<TableData>Config Hash</TableData>
					<TableData classList="break-all">{clusterLock.cluster_definition.config_hash}</TableData>
				</TableRow>

				<TableRow>
					<TableData>Creator</TableData>
					<TableData></TableData>
				</TableRow>

				<TableRow>
					<TableData>Creator Address</TableData>
					<TableData>{clusterLock.cluster_definition.creator.address}</TableData>
				</TableRow>

				<TableRow>
					<TableData>Creator Config Signature</TableData>
					<TableData classList="break-all"
						>{clusterLock.cluster_definition.creator.config_signature}</TableData
					>
				</TableRow>

				<TableRow>
					<TableData>Definition Hash</TableData>
					<TableData classList="break-all"
						>{clusterLock.cluster_definition.definition_hash}</TableData
					>
				</TableRow>

				<TableRow>
					<TableData>DKG Algorithm</TableData>
					<TableData>{clusterLock.cluster_definition.dkg_algorithm}</TableData>
				</TableRow>

				<TableRow>
					<TableData>Fork Version</TableData>
					<TableData>{clusterLock.cluster_definition.fork_version}</TableData>
				</TableRow>

				<TableRow>
					<TableData>Name</TableData>
					<TableData>{clusterLock.cluster_definition.name}</TableData>
				</TableRow>

				<TableRow>
					<TableData>Number of Validators</TableData>
					<TableData>{clusterLock.cluster_definition.num_validators}</TableData>
				</TableRow>

				<TableRow>
					<TableData>Threshold</TableData>
					<TableData>{clusterLock.cluster_definition.threshold}</TableData>
				</TableRow>

				<TableRow>
					<TableData>Timestamp</TableData>
					<TableData>{clusterLock.cluster_definition.timestamp}</TableData>
				</TableRow>

				<TableRow>
					<TableData>UUID</TableData>
					<TableData>{clusterLock.cluster_definition.uuid}</TableData>
				</TableRow>

				<TableRow>
					<TableData>Version</TableData>
					<TableData>{clusterLock.cluster_definition.version}</TableData>
				</TableRow>
			</tbody>
		</table>
	</div>

	<div class="flex flex-col mb-8">
		<!-- <h2 class="text-lg border border-white border-dashed border-b-0 px-2 bg-yellow-900">
			Operators
		</h2> -->

		<TableHeader>Operators</TableHeader>

		{#each clusterLock.cluster_definition.operators as operator}
			<table class="mb-4">
				<thead>
					<tr>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<TableRow>
						<TableData>Address</TableData>
						<TableData>{operator.address}</TableData>
					</TableRow>

					<TableRow>
						<TableData>Config Signature</TableData>
						<TableData classList="break-all">{operator.config_signature}</TableData>
					</TableRow>

					<TableRow>
						<TableData>ENR</TableData>
						<TableData classList="break-all">{operator.enr}</TableData>
					</TableRow>

					<TableRow>
						<TableData>ENR Signature</TableData>
						<TableData classList="break-all">{operator.enr_signature}</TableData>
					</TableRow>
				</tbody>
			</table>
		{/each}
	</div>

	<div class="flex flex-col mb-8">
		<TableHeader>Validators</TableHeader>

		{#each clusterLock.cluster_definition.validators as validator}
			<table class="mb-4">
				<thead>
					<tr>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<TableRow>
						<TableData>Fee Recipient Address</TableData>
						<TableData classList="break-all">{validator.fee_recipient_address}</TableData>
					</TableRow>

					<TableRow>
						<TableData>Withdrawal Address</TableData>
						<TableData classList="break-all">{validator.withdrawal_address}</TableData>
					</TableRow>
				</tbody>
			</table>
		{/each}
	</div>
</main>
