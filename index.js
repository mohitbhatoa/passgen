#!/usr/bin/env node
import commander from 'commander'
import clipboardy from 'clipboardy'
import colors from 'colors'

import createPassword from './utils/createPassword.js'

const program = new commander.Command().version('1.0.0').description('Password Generator')

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse()

const { length, numbers, symbols } = program.opts()

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols)

// Copy to clipboard
clipboardy.writeSync(generatedPassword)

// Output password
console.log('Generated Password: '.blue + generatedPassword.bold)
console.log('Password copied to clipboard'.yellow)
