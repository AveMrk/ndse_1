#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

if(process.argv[2] && process.argv[2] === '--year' || process.argv[2] === '-y'){
  let year = new Date().getFullYear() - process.argv[3];
  console.log(year)
} else if (process.argv[2] && process.argv[2] === '--month' || process.argv[2] === '-m'){
  let month = new Date().getMonth() - process.argv[3];
  console.log(month)
} else if (process.argv[2] && process.argv[2] === '--date' || process.argv[2] === '-d'){
  let month = new Date().getDay() - process.argv[3];
  console.log(month)
} else {
  console.error('Expected at least two argument!');
}
