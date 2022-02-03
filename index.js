'use strict'

import { makeExecutableSchema } from '@graphql-tools/schema'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { settings } from './core'
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
 * Build the start up message and show it.
 * @returns {Function} - The start up message.
 */
const showStarupMessage = () => {
  const { APP_NAME, APP_HOST, APP_PORT, APP_ENV } = settings
  const message = `[${APP_NAME}] application is running on http://${APP_HOST}:${APP_PORT} in ${APP_ENV} mode`

  return console.log(message)
}

/**
 * Raise the server.
 */
app.listen(port, showStarupMessage)
