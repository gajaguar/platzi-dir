'use strict'

import { log } from '../utils'
import { getDbConnection } from './'

/**
 * Drop the database.
 */
export const dropDatabase = async () => {
  try {
    const dbConnetion = await getDbConnection()
    dbConnetion.dropDatabase()
    log.info('The database was dropped.')
  } catch (error) {
    log.error(`dropDatabase - ${error.message}`)

    throw error
  }
}
