<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ ProductByID } = data);

	import { Logger } from '$lib/logger';

	let Log = new Logger('ProductByID::Page.svelte::');
	$: Log.debug('data', data);
	$: Log.debug('$ProductByID', $ProductByID);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="h1"><span class="gradient-heading">Query Variables with SSR</span></h1>
		{#if $ProductByID.fetching}
			<span>Loading ... </span>
			{JSON.stringify($ProductByID.variables)}
		{:else if $ProductByID.errors}
			<p>Error: {$ProductByID.errors[0].message}</p>
		{:else}
			{JSON.stringify($ProductByID.data)}
		{/if}
	</div>
</div>

<style lang="postcss">
</style>
