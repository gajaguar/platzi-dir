/*
 * Class representing the application configuration.
 * @class
 */
class Configuration {
  /**
   * Obtain the root path.
   * @returns {string} - The root path for the application.
   */
  getRootDir() {
    const { pathname: __root } = new URL('../', import.meta.url)
    return __root
  }

  get ROOT_DIR() {
    return this.getRootDir()
  }
}

export const settings = new Configuration()
