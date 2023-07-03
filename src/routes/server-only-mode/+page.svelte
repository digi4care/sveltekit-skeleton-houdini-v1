<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	// $: ({ ProductsServerLoad } = data);

	import { Logger } from '$lib/logger';

	let Log = new Logger('ServerOnlyMode::Page.svelte::');
	$: Log.debug('data', data);
	// $: Log.debug('$ProductsServerLoad', $ProductsServerLoad);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="h1"><span class="gradient-heading">Server only mode</span></h1>
		<strong>The data</strong>
		{JSON.stringify(data)}
		<!-- <p />
		<strong>The $ProductsServerLoad</strong>
		{JSON.stringify($ProductsServerLoad)} -->
	</div>
</div>

<style lang="postcss">
</style>
