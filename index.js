'use strict'

import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers } from './lib/resolvers'
import { getContentOf } from './utils'

/**
 * Express application.
 */
const app = express()

/**
 * Setup port for application.
 */
const port = process.env.PORT || 3000

/**
 * GraphQL schema.
 */
const typeDefs = getContentOf('./lib/schema.graphql')

/**
 * Executable GraphQL schema.
 */
const schema = makeExecutableSchema({ typeDefs, resolvers })

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
