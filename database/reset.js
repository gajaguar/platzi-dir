'use strict'

import { settings } from '../core'
import { dropDatabase, populateDatabase } from '.'

const { DB_RESET } = settings

/**
 * Reset the database if the `DB_RESET` setting is true.
 */
export const resetDatabase = () => {
  if (DB_RESET) {
    dropDatabase()
    populateDatabase()
  }
}
