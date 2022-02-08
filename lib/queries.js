'use string'

import { ObjectId } from 'mongodb'
import { getDbConnection } from '../database'
import { log } from '../utils'

export const queries = {
  /**
   * Retrieve all courses from source.
   * @returns {Object[]} - Array of courses.
   */
  getCourses: async () => {
    try {
      const dbConnection = await getDbConnection()
      const collection = dbConnection.collection('courses')
      const query = {}
      const options = { ordered: true }
      const result = await collection.find(query, options).toArray()

      return result
    } catch (error) {
      log.error(`getCourses - ${error.message}`)

      throw error
    }
  },

  /**
   * Retrieve a specific course from source.
   * @param {string} id - Course id.
   * @returns {Object} - Single course.
   */
  getCourse: async (_root, { id } = args) => {
    try {
      const dbConnection = await getDbConnection()
      const collection = dbConnection.collection('courses')
      const _id = new ObjectId(id)
      const query = { _id }
      const options = {}
      const result = await collection.findOne(query, options)

      return result
    } catch (error) {
      log.error(`getCourse - ${error.message}`)

      throw error
    }
  },
}
