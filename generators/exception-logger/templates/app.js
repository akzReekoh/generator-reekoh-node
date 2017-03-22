'use strict'

const reekoh = require('reekoh')
const _plugin = new reekoh.plugins.ExceptionLogger()

// let connectionString

/**
 * Emitted when device data is received.
 * This is the event to listen to in order to get real-time data feed from the connected devices.
 *  @param {error} error The Error object to be handled/logged.
 */
_plugin.on('exception', (error) => {
  // TODO: Send the error to the error/bug tracking service. error is an instance of PlatformError Custom Error Object.
  console.log(error)
})

/**
 * Emitted when the platform bootstraps the plugin.
 * The plugin should listen once and execute its init process.
 */
_plugin.once('ready', () => {

  /**
   *
   *  Initialize the connection using the _plugin.config. See config.json
   *  You can customize config.json based on the needs of your plugin.
   *  Reekoh will inject these configuration parameters as _plugin.config when the platform bootstraps the plugin.
   *
   * Example:
   *
   * var connectionString = _plugin.config.connString
   *
   *
   *  Note: Config Names are based on what you specify on the config.json.
   */

  // TODO: Initialize the connection to the error/bug tracking service here.
  _plugin.log('Exception Logger has been initialized.')
  _plugin.emit('init')
})

module.exports = _plugin
