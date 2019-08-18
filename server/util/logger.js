const chalk = require('chalk')

const info = args => console.log(`[${chalk.green('Info')}] ${args}`)
const warn = args => console.log(`[${chalk.yellow('Warning')}] ${args}`)
const error = args => console.log(`[${chalk.red('Error')}] ${args}`)

module.exports = {
  info,
  warn,
  error
}