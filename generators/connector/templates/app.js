'use strict'

let reekoh = require('reekoh')
let _plugin = new reekoh.plugins.Connector()

/**
 * Emitted when device data is received.
 * This is the event to listen to in order to get real-time data feed from the connected devices.
 * @param {object} data The data coming from the device represented as JSON Object.
 */
_plugin.on('data', (data) => {
  //  TODO: Send data outbound to the other platform, service or app here.
  console.log(data)
})

/**
 * Emitted when the platform bootstraps the plugin. The plugin should listen once and execute its init process.
 */
_plugin.once('ready', () => {
  /*
   *  Initialize the connection using the _plugin.config. See config.json
   *  You can customize config.json based on the needs of your plugin.
   *  Reekoh will inject these configuration parameters as _plugin.config when the platform bootstraps the plugin.
   *
   *  Example:
   *
   *  let connectionString = _plugin.config.connstring
   *  connection = service.connect(connectionString)
   *
   *  Note: Config Names are based on what you specify on the config.json.
   */
  console.log(_plugin.config)
  _plugin.log('Connector has been initialized.')
})

process.on('SIGINT', function () {
  // Do graceful exit
  // connection.close()
})
