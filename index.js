'use strict'

import express from 'express'
import { getContentOf } from './utils'
import { graphql, buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'
import { resolvers } from './lib/resolvers'

/**
 * Root path.
 * @constant {string}
 */
const { pathname: __root } = new URL('./', import.meta.url)

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
const schema = buildSchema(getContentOf('./lib/schema.graphql'))

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
