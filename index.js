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
 * Execute `hello` query
 */
graphql(schema, '{ hello }')
	.then((data) => {
		console.dir(data)
	})
	.catch((error) => {
		console.error(error)
	})
