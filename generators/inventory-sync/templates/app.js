'use strict'

const reekoh = require('reekoh')
const plugin = new reekoh.plugins.InventorySync()

// let client = null

/**
 * Emitted when the platform bootstraps the plugin.
 * The plugin should listen once and execute its init process.
 */
plugin.once('ready', () => {

	// TODO: Initialize your client or subscribe to the 3rd party service here.

	/**
	 * Example:
	 *
	 * var service = require('service')
	 *
	 * service.connect(options, (error, serviceClient) => {
	 * 	client = serviceClient
	 * })
	 *
	 */

  plugin.log('Inventory sync has been initialized.')
})

/**
 * Emitted when a sync has been requested by the Reekoh platform.
 * This event will be received by the plugin based on the schedule/interval set by the user on the Plugin Configuration.
 */
plugin.on('sync', () => {

	// TODO: Fetch updates from service

	/**
	 * Example:
	 *
	 * client.fetchData((error, dataCollection) => {
	 *   dataCollection.forEach((data) => {
	 *     plugin.syncDevice(data)
	 *   })
	 * })
	 *
	 */
})

/**
 * Emitted when a new device has been registered on the platform.
 * @param device {Object} - The device details.
 */
plugin.on('adddevice', (device) => {

	// TODO: Add device to 3rd party service

	/**
	 * Example:
	 *
	 * client.addDevice(device, () => {
	 *   console.log('New device added')
	 * })
	 *
	 */

})

/**
 * Emitted when a new device has been updated on the platform.
 * @param device {Object} - The device details.
 */
plugin.on('updatedevice', (device) => {

	// TODO: Update device from 3rd party service

	/**
	 * Example:
	 *
	 * client.updateDevice(device, () => {
	 *   console.log(`${device.name} has been updated`)
	 * })
	 *
	 */

})

/**
 * Emitted when a new device has been removed from the platform.
 * @param device {Object} - The device details.
 */
plugin.on('removedevice', (device) => {

	// TODO: Remove device from 3rd party service

	/**
	 * Example:
	 *
	 * client.removeDevice(device._id, () => {
	 *   console.log(`${device.name} has been removed`)
	 * })
	 *
	 */
})

module.exports = plugin
