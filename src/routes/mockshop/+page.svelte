<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	let { Products } = data;
	$: ({ Products } = data);

	import { Logger } from '$lib/logger';

	let Log = new Logger('Mockupshop::Page.svelte::');
	$: Log.debug('$Products', $Products);

	$: products = $Products?.data?.products?.edges ?? [];
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="h1"><span class="gradient-heading">Mockupshop with SSR</span></h1>
		{#if $Products.fetching}
			<p>Fetching...</p>
		{:else if $Products.errors}
			<p>Error: {$Products.errors[0].message}</p>
		{:else}
			<ul>
				{#each products ?? [] as product}
					<li>{product.node.title}</li>
				{/each}
			</ul>
			{#if $Products?.pageInfo?.hasNextPage}
				<button
					on:click={() => Products.loadNextPage()}
					type="button"
					class="btn btn-xl variant-filled">load more</button
				>
			{/if}
		{/if}
	</div>
</div>

<style lang="postcss">
</style>
