'use strict'

import { courses, log } from '../utils'
import { getDatabase } from './'

/**
 * Add mocked data to the database.
 */
export const populateDatabase = async () => {
  try {
    const database = await getDatabase()
    const collection = database.collection('courses')
    const options = { ordered: true }
    const result = await collection.insertMany(courses, options)
    log.info(`${result.insertedCount} courses were added to the database.`)
  } catch (error) {
    log.error(`populateDatabase - ${error.message}`)

    throw error
  }
}
