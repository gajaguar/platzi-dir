'use strict'

import { settings } from '../core'

const { APP_NAME } = settings

class Logger {
  /**
   * Application name.
   * @type {String}
   * @private
   */
  #appName = APP_NAME

  /**
   * Print an error message.
   * @param {string} message - Message to log.
   */
  error(message) {
    const dateTime = new Date().toISOString()
    console.error(`[${this.#appName}] ${dateTime} Error: ${message}`)
  }

  /**
   * Print an information message.
   * @param {string} message - Message to log.
   */
  info(message) {
    const dateTime = new Date().toISOString()
    console.info(`[${this.#appName}] ${dateTime} ${message}`)
  }
}

export const log = new Logger()
