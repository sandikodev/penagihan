<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<ul>
	{#each data.package as item}
		<li>{item.name}</li>
	{/each}
</ul>
