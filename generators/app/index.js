'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

const APP_NAME = 'demo-reekoh'

module.exports = class extends Generator {
  initializing () {
    let self = this

    self.log(yosay(
      'Welcome to the premium ' + chalk.red('generator-demo-reekoh') + ' generator!'
    ))

    self.prompt([
      {
        type: 'list',
        name: 'seed',
        message: 'Select plugin seed to install:',
        choices: [
          'Connector',
          'Channel',
          'Inventory Sync',
          'Exception Logger',
          'Gateway',
          'Logger',
          'Service',
          'Storage',
          'Stream'
        ]
      }
    ]).then(function (answers) {

      switch (answers.seed) {
        case 'Channel':
          self.composeWith(`${APP_NAME}:channel`,
            { fromRoot: true}, { local: require.resolve('../channel')})
          break

        case 'Inventory Sync':
          self.composeWith(`${APP_NAME}:inventory-sync`,
            { fromRoot: true}, { local: require.resolve('../inventory-sync')})
          break

        case 'Gateway':
          self.composeWith(`${APP_NAME}:gateway`,
            { fromRoot: true}, { local: require.resolve('../gateway')})

          break

        case 'Storage':
          self.composeWith(`${APP_NAME}:storage`,
            { fromRoot: true}, { local: require.resolve('../storage')})
          break

        case 'Logger':
          self.composeWith(`${APP_NAME}:logger`,
            { fromRoot: true}, { local: require.resolve('../logger')})
          break

        case 'Exception Logger':
          self.composeWith(`${APP_NAME}:exception-logger`,
            { fromRoot: true}, { local: require.resolve('../exception-logger')})
          break

        case 'Connector':
          self.composeWith(`${APP_NAME}:connector`,
            { fromRoot: true}, { local: require.resolve('../connector')})
          break

        case 'Service':
          self.composeWith(`${APP_NAME}:service`,
            { fromRoot: true}, { local: require.resolve('../service')})
          break

        case 'Stream':
          self.composeWith(`${APP_NAME}:stream`,
            { fromRoot: true}, { local: require.resolve('../stream')})
          break

        default:
          console.log('Cant find the sub-generator for the selected plugin seed.')
      }
    })
  }
}
