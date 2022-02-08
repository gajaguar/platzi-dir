'use strict'

import { mutations } from './mutations'
import { queries } from './queries'

/**
 * GraphQL resolvers.
 * @property {Object} Query - GraphQL queries.
 */
export const resolvers = {
  Query: queries,
  Mutation: mutations,
}
