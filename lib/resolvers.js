'use strict'

import { courses } from '../utils'

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
     * @returns {Course[]} - Array of courses.
     */
    getCourses: () => courses,

    /**
     * Retrieve a specific course from source.
     * @param {string} id - Course id.
     * @returns {Course} - Course.
     */
    getCourse: (_root, { id } = args) =>
      courses.find((course) => course._id === id),
  },
}
