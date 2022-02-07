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
    log.info('the database was dropped.')
  } catch (error) {
    log.error(`${error.message}`)

    throw error
  }
}
