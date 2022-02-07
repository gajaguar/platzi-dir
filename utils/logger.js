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
    console.error(`[${this.#appName}] error: ${message}`)
  }

  /**
   * Print an information message.
   * @param {string} message - Message to log.
   */
  info(message) {
    console.info(`[${this.#appName}] info: ${message}`)
  }
}

export const log = new Logger()
