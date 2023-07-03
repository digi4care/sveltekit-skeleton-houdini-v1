import { json } from '@sveltejs/kit';
import { /*graphql,*/ ProductsEndpointStore } from '$houdini';

import type { RequestHandler } from './$types';

/*export const _houdini_load = graphql(`
    query ProductsEndpoint {
    products(first: 20) {
        edges {
        node {
            id
            title
            description
            featuredImage {
            id
            url
            }
            variants(first: 3) {
            edges {
                node {
                price {
                    amount
                    currencyCode
                }
                }
            }
            }
        }
        }
    }
    }
`)*/

export const GET: RequestHandler = async (event) => {
	const ProductsEndpoint = new ProductsEndpointStore();
	const { data } = await ProductsEndpoint.fetch({ event });
	return json(data);
};
