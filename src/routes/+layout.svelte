<script>
	import Container from '$lib/components/Container.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<main class="text-gray-200 pb-16">
	<Header />

	<Container>
		<slot />
	</Container>
</main>
