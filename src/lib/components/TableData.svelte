<script lang="ts">
	export let classList: string | undefined = '';
</script>

<td class={`border border-gray-800 px-1 ${classList}`}>
	<slot />
</td>
