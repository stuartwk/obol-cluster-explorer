<script lang="ts">
	import { page } from '$app/stores';
</script>

<main>
	<div>
		<h1 class="text-2xl">Oh no!</h1>
		<p>Something went wrong.</p>
		<p>Looks like we encountered: {$page.error ? $page.error?.message : ''}</p>
	</div>
</main>
