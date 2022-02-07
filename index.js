'use strict'

import { makeExecutableSchema } from '@graphql-tools/schema'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { settings } from './core'
import { resolvers } from './lib/resolvers'
import { getContentOf, showStarupMessage } from './utils'

/**
 * Setup port for application.
 */
const { APP_PORT } = settings

/**
 * Express application.
 */
const app = express()

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
app.listen(APP_PORT, showStarupMessage)
