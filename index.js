'use strict'

import { graphql, buildSchema } from 'graphql'

/**
 * Define the schema.
 */
const schema = buildSchema(`
	type Query {
		hello: String
	}
`)

/**
 * Setup resolvers.
 * Must be named same as query.
 */
const resolvers = {
	hello: () => 'Hello World'
}

/**
 * Execute `hello` query
 */
graphql(schema, '{ hello }', resolvers)
	.then((data) => {
		console.dir(data)
	})
	.catch((error) => {
		console.error(error)
	})
