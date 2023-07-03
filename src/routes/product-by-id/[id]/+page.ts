import { error } from '@sveltejs/kit';

import { graphql } from '$houdini';
import type { ProductByIDVariables } from './$houdini';

export const _houdini_load = graphql(`
	query ProductByID($id: ID!) {
		product(id: $id) {
			id
			title
			description
			featuredImage {
				id
				url
			}
		}
	}
`);

export const _ProductByIDVariables: ProductByIDVariables = (event) => {
	return {
		id: `gid://shopify/Product/${event.params.id}`
	};
};
