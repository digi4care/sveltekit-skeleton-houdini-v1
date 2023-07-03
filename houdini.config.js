/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: './schema.graphql',
	watchSchema: {
		url: 'https://mock.shop/api'
	},
	scalars: {
		/* in your case, something like */
		URL: {
			// <- The GraphQL Scalar
			type: 'string' // <-  The TypeScript type
		},
		Decimal: {
			// <- The GraphQL Scalar
			type: 'number' // <-  The TypeScript type
		}
	},
	plugins: {
		'houdini-svelte': {}
	}
};

export default config;
