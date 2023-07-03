<script lang="ts">
	import { PendingValue } from '$houdini';
	import type { PageData } from './$houdini';

	export let data: PageData;

	let { ProductsPendingValue } = data;
	$: ({ ProductsPendingValue } = data);

	import { Logger } from '$lib/logger';

	let Log = new Logger('PendingValue::Page.svelte::');
	$: Log.debug('PendingValue', PendingValue);
	$: Log.debug('$ProductsPendingValue', $ProductsPendingValue);

	$: products = $ProductsPendingValue?.data?.products?.edges ?? [];
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="h1"><span class="gradient-heading">PendingValue with SSR</span></h1>
		{#if $ProductsPendingValue?.data?.products?.edges === PendingValue}
			<p>Loading the products ....</p>
		{:else}
			<ul>
				{#each products ?? [] as product}
					<li>{product.node.title}</li>
				{/each}
			</ul>
		{/if}
		{#if $ProductsPendingValue?.pageInfo?.hasNextPage}
			<button
				on:click={() => ProductsPendingValue.loadNextPage()}
				type="button"
				class="btn btn-xl variant-filled">load more</button
			>
		{/if}
	</div>
</div>

<style lang="postcss">
</style>
