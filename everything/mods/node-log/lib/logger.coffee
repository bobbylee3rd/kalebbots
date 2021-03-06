require('coffee-script');
require 'colors'
pack = require('./package').load()

module.exports =
  log: (str) -> console.log '[' + pack.name.magenta + ']', str
  debug: (str) -> console.log '[' + pack.name.magenta, '-', 'debug'.green + ']', str
  info: (str) -> console.log '[' + pack.name.magenta, '-', 'info'.white + ']', str
  warn: (str) -> console.log '[' + pack.name.magenta, '-', 'warn'.yellow + ']', str
  error: (str) -> console.log '[' + pack.name.magenta, '-', 'error'.red + ']', str
  setName: (str) -> pack.name = str

