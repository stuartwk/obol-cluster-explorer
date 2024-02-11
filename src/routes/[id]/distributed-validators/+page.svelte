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
		<NavPill url={`/${id}/cluster-definition`} label="Cluster Definition" />
		<NavPill url={`/${id}/distributed-validators`} active={true} label="Distributed Validators" />
		<NavPill url={`/${id}/node-signatures`} label="Node Signatures" />
	</nav>

	<div id="node-signatures" class="flex flex-col mb-8">
		<div class="mb-8">
			<h2 class="text-2xl">Distributed Validators</h2>
			<p>Total: {clusterLock.distributed_validators.length}</p>
		</div>

		{#each clusterLock.distributed_validators as validator, index}
			<div>
				<div class="flex">
					<h3 class="float-left text-lg bg-green-600 text-black px-4">Validator {index + 1}</h3>
				</div>

				<div class="w-full border-gray-800 border mb-16 p-4">
					{#if validator.distributed_public_key}
						<h3>Distributed Public Key</h3>
						<table class="mb-8">
							<tbody>
								<TableRow>
									<TableData classList="break-all">{validator.distributed_public_key}</TableData>
								</TableRow>
							</tbody>
						</table>
					{/if}

					{#if validator.builder_registration}
						<h3>Builder Registration Signature</h3>
						<table class="mb-8">
							<tbody>
								<TableRow>
									<TableData classList="break-all"
										>{validator.builder_registration.signature}</TableData
									>
								</TableRow>
							</tbody>
						</table>
					{/if}

					{#if validator.builder_registration}
						<h3>Builder Registration Message</h3>
						<table class="mb-8">
							<thead>
								<tr>
									<th></th>
									<th></th>
								</tr>
							</thead><tbody>
								<TableRow>
									<TableData>Fee Recipient</TableData>
									<TableData classList="break-all"
										>{validator.builder_registration.message.fee_recipient}</TableData
									>
								</TableRow>

								<TableRow>
									<TableData>Gas Limit</TableData>
									<TableData>{validator.builder_registration.message.gas_limit}</TableData>
								</TableRow>

								<TableRow>
									<TableData>Pubkey</TableData>
									<TableData classList="break-all"
										>{validator.builder_registration.message.pubkey}</TableData
									>
								</TableRow>

								<TableRow>
									<TableData>Gas Limit</TableData>
									<TableData>{validator.builder_registration.message.timestamp}</TableData>
								</TableRow>
							</tbody>
						</table>
					{/if}

					{#if validator.deposit_data}
						<h3>Deposit Data</h3>
						<table class="mb-8">
							<thead>
								<tr>
									<th></th>
									<th></th>
								</tr>
							</thead><tbody>
								<TableRow>
									<TableData>Amount</TableData>
									<TableData>{validator.deposit_data.amount}</TableData>
								</TableRow>

								<TableRow>
									<TableData>Deposit Data Root</TableData>
									<TableData classList="break-all"
										>{validator.deposit_data.deposit_data_root}</TableData
									>
								</TableRow>

								<TableRow>
									<TableData>Pubkey</TableData>
									<TableData classList="break-all">{validator.deposit_data.pubkey}</TableData>
								</TableRow>

								<TableRow>
									<TableData>Signature</TableData>
									<TableData classList="break-all">{validator.deposit_data.signature}</TableData>
								</TableRow>

								<TableRow>
									<TableData>Withdrawal Credentials</TableData>
									<TableData classList="break-all"
										>{validator.deposit_data.withdrawal_credentials}</TableData
									>
								</TableRow>
							</tbody>
						</table>
					{/if}

					{#if validator.public_shares}
						<h3>Public Shares</h3>

						<table>
							<thead>
								<tr>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{#each validator.public_shares as share, index}
									<TableRow>
										<TableData classList="break-all">{share}</TableData>
									</TableRow>
								{/each}
							</tbody>
						</table>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</main>
