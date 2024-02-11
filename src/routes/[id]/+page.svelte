<script lang="ts">
	import ClusterHeader from '$lib/components/ClusterHeader.svelte';
	import Container from '$lib/components/Container.svelte';
	import TableData from '$lib/components/TableData.svelte';
	import TableRow from '$lib/components/TableRow.svelte';
	import type { ClusterLock } from '$lib/types';
	import { truncateAddress } from '$lib/utils';

	export let data: {
		clusterLock: ClusterLock;
	};

	const { clusterLock } = data;
</script>

<main>
	<ClusterHeader {clusterLock} />

	<nav>
		<a href="/cluster-definition">Cluster Definition</a>
		<a href="/distributed-validators">Distributed Validators</a>
		<a href="/node-signatures">Node Signatures</a>
	</nav>

	<div class="flex flex-col mb-8">
		<h2 class="text-lg">Cluster Definition</h2>

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
		<h2 class="text-lg">Operators</h2>

		{#each clusterLock.cluster_definition.operators as operator}
			<table class="mb-4">
				<thead>
					<tr>
						<th></th>
						<th></th>
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
		<h2 class="text-lg">Validators</h2>

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

	{#if clusterLock.node_signatures}
		<div id="node-signatures" class="flex flex-col mb-8">
			<h2 class="text-lg">Node Signatures</h2>

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
		</div>
	{/if}
</main>
