'use strict'

import { ObjectId } from 'mongodb'
import { getDbConnection } from '../database'

/**
 * GraphQL resolvers.
 * @property {Object} Query - GraphQL query resolvers.
 * @method Query.getCourses - Get courses resolver.
 * @method Query.getCourse - Get course resolver.
 */
export const resolvers = {
  Query: {
    /**
     * Retrieve all courses from source.
     * @returns {Object[]} - Array of courses.
     */
    getCourses: async () => {
      const dbConnection = await getDbConnection()
      const collection = dbConnection.collection('courses')
      const query = {}
      const options = { ordered: true }
      const result = await collection.find(query, options).toArray()

      return result
    },

    /**
     * Retrieve a specific course from source.
     * @param {string} id - Course id.
     * @returns {Course} - Course.
     */
    getCourse: async (_root, { id } = args) => {
      const dbConnection = await getDbConnection()
      const collection = dbConnection.collection('courses')
      const _id = new ObjectId(id)
      const query = { _id }
      const options = {}
      const result = await collection.findOne(query, options)

      return result
    },
  },
}
