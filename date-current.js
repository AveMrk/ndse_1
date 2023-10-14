#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

//current
if(process.argv[2] && process.argv[2] === '--year' || process.argv[2] === '-y'){
    let year = new Date().getFullYear();
    console.log(year);
} else if (process.argv[2] && process.argv[2] === '--month' || process.argv[2] === '-m'){
    let month = new Date().getMonth();
    console.log(month);
} else if(process.argv[2] && process.argv[2] === '--date' || process.argv[2] === '-d'){
    let day = new Date().getDay();
    console.log(day)
} else {
    let isoDate = new Date().toISOString();
    console.log(isoDate)
}
