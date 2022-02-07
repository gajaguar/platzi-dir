'use strict'

import { dropDatabase, populateDatabase } from '.'
import { settings } from '../core'

const { DB_RESET } = settings

/**
 * Reset the database if the `DB_RESET` setting is true.
 */
export const resetDatabase = async () => {
  if (DB_RESET) {
    await dropDatabase()
    await populateDatabase()
  }
}
