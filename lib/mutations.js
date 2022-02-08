'use strict'

import { getDatabase } from '../database'
import { defaultCourse, log } from '../utils'

export const mutations = {
  /**
   * Create a new course in source.
   * @param {Object} course - Course to create.
   * @returns {Object} - Created course.
   * @throws {Error} - If course is invalid.
   * @throws {Error} - If course already exists.
   * @todo
   * - [ ] Extract index creation into a separate function.
   */
  createCourse: async (_root, { course }) => {
    try {
      if (!course.title) throw new Error('Course title is required.')
      const newCourse = { ...defaultCourse, ...course }
      const database = await getDatabase()
      const collection = database.collection('courses')
      collection.createIndex({ title: 1 }, { unique: true })
      const result = await collection.insertOne(newCourse)
      const query = { _id: result.insertedId }
      const createdCourse = await collection.findOne(query)

      return createdCourse
    } catch (error) {
      log.error(`createCourse - ${error.message}`)

      throw error
    }
  },
}
