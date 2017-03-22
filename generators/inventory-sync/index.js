'use strict'

const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const async = require('async')

module.exports = class extends Generator {

  prompting () {
    if (!this.options.fromRoot) {
      this.log(yosay(
        `Welcome to the premium ${chalk.red('generator-demo-reekoh')} generator!`
      ))
    }
  }

  writing () {
    let self = this
    
    async.waterfall([
      (done) => {
        self.fs.copy(
          self.templatePath('.'),
          self.destinationPath('.'))

        self.fs.copy(
          self.templatePath('.gitignore'),
          self.destinationPath('.gitignore'))

        self.fs.copy(
          self.templatePath('.jshintrc'),
          self.destinationPath('.jshintrc'))

        self.fs.copy(
          self.templatePath('.travis.yml'),
          self.destinationPath('.travis.yml'))

        done()
      }
    ], (err) => {
      if (err) return console.log(err)
      this.installDependencies()
    })
  }
}
