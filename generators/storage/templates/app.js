'use strict'

const reekoh = require('reekoh')
const plugin = new reekoh.plugins.Storage()

/**
 * Emitted when device data is received.
 * This is the event to listen to in order to get real-time data feed from the connected devices.
 * @param data {Object | [Object]} - The transient data coming from the devices represented as an Object or a collection of Objects.
 */
plugin.on('data', (data) => {
	// TODO: Insert the data to the database using the initialized connection.
  console.log(data)
})

/**
 * Emitted when the platform bootstraps the plugin.
 * The plugin should listen once and execute its init process.  
 */
plugin.once('ready', () => {
  	
	// TODO: Initialize the connection to your database here.
  console.log('Storage has been initialized.')
})

module.exports = plugin
