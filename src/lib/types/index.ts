// place files you want to import through the `$lib` alias in this folder.
export type DistributedValidatorClusters = {
	cluster_locks: ClusterLock[];
	total_count: number;
	total_pages: number;
};

export type ClusterLock = {
	_id: string;
	cluster_definition: ClusterDefinition;
	distributed_validators: DistributedValidator[];
	signature_aggregate: string;
	lock_hash: string;
	node_signatures?: string[];
	__v: number;
};

export type ClusterDefinition = {
	_id: string;
	name: string;
	operators: { address: string; enr: string; config_signature: string; enr_signature: string }[];
	creator: {
		address: string;
		config_signature: string;
	};
	uuid: string;
	version: string;
	num_validators: number;
	threshold: number;
	dkg_algorithm: string;
	fork_version: string;
	config_hash: string;
	timestamp: string;
	validators: {
		fee_recipient_address: string;
		withdrawal_address: string;
	}[];
	definition_hash: string;
	__v: number;
};

export type DistributedValidator = {
	builder_registration?: {
		signature: string;
		message: {
			fee_recipient: string;
			gas_limit: number;
			pubkey: string;
			timestamp: string;
		};
	};
	distributed_public_key: string;
	public_shares: string[];
	deposit_data?: {
		amount: string;
		pubkey: string;
		signature: string;
		withdrawal_credentials: string;
		deposit_data_root: string;
	};
};
