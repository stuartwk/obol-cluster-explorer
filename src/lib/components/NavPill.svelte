<script lang="ts">
	export let url: string;
	export let label: string;
	export let active: boolean = false;

	const baseClass = 'border px-1 text-lg';
	const activeClass = 'border-green-600 bg-green-600 text-black';
	const inactiveClass = 'border-black hover:border-green-600';
</script>

<a class={`${baseClass} ${active ? activeClass : inactiveClass}`} href={url}>{label}</a>
