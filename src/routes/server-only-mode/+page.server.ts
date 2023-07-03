import { /*graphql,*/ ProductsServerLoadStore } from '$houdini';
import type { PageServerLoad } from './$houdini';

/*
export const _houdini_load = graphql(`
    query ProductsServerLoad {
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

export const load: PageServerLoad = async (event) => {
	const ProductsServerLoad = new ProductsServerLoadStore();
	const { data } = await ProductsServerLoad.fetch({ event });

	return { data };
};
