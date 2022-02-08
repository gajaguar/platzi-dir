'use strict'

import { log } from '../utils'
import { getDatabase } from './'

/**
 * Drop the database.
 */
export const dropDatabase = async () => {
  try {
    const database = await getDatabase()
    database.dropDatabase()
    log.info('The database was dropped.')
  } catch (error) {
    log.error(`dropDatabase - ${error.message}`)

    throw error
  }
}
