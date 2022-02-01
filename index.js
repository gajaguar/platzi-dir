'use strict'

import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { graphql, buildSchema } from 'graphql'

/**
 * Express application.
 */
const app = express()

/**
 * Setup port for application.
 */
const port = process.env.PORT || 3000

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
  hello: () => 'Hello World',
}

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
)

/**
 * Raise the server.
 */
app.listen(port, () => {
  console.log(
    `[platzi-dir] Server is listening at http://localhost:${port}/api`
  )
})

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
