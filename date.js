#!/usr/bin/env node

const yargs = require('yargs')
//const { hideBin } = require('yargs/helpers')


const getCurrentYear = () =>{
  return new Date().getFullYear();
}
const getCurrentMonth = () => {
  return new Date().getMonth();
}
const getCurrentDay = () => {
  return new Date().getDay();
}
//an old solution
/*if(process.argv[2] && process.argv[2] === '--year' || process.argv[2] === '-y'){
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
}*/

//init add command
yargs
  .command({
    command: "add",
    describe: "",
    handler(argv) {
      if (argv.year || argv.y) {
        if (argv.year === true || argv.y === true) {
          console.log(+getCurrentYear());
        } else {
          let year = +getCurrentYear() + +argv.y;
          console.log(year);
        }
      } else if (argv.month || argv.m) {
        if (argv.month === true || argv.m === true) {
          console.log(+getCurrentMonth());
        } else {
          let month = +getCurrentMonth() + +argv.m;
          console.log(month);
        }
      } else if (argv.date || argv.d) {
        if (argv.date === true || argv.d === true) {
          console.log(+getCurrentDay());
        }
        let month = +getCurrentDay + +argv.d;
        console.log(date);
      } else {
        console.error("Expected at least one argument!");
      }
    },
  })
  .help().argv;

//init current command

yargs.command({
  command: "current",
  describe: "",
  handler() {
    if (argv.year || argv.y) {
      console.log(+getCurrentYear());
    } else if (argv.month || argv.m) {
      console.log(+getCurrentMonth());
    } else if (argv.date || argv.d) {
      console.log(+getCurrentDay());
    } else {
      console.log(new Date());
    }
  },
});

//init sub command
yargs.command({
  command: "sub",
  describe: "",
  handler() {
    if (argv.year || argv.y) {
      if (argv.year === true || argv.y === true) {
        console.log(+getCurrentYear());
      } else {
        let year = +getCurrentYear() - +argv.y;
        console.log(year);
      }
    } else if (argv.month || argv.m) {
      if (argv.month === true || argv.m === true) {
        console.log(+getCurrentMonth());
      } else {
        let month = +getCurrentMonth() - +argv.m;
        console.log(month);
      }
    } else if (argv.date || argv.d) {
      if (argv.date === true || argv.d === true) {
        console.log(+getCurrentDay());
      }
      let month = +getCurrentDay - +argv.d;
      console.log(date);
    } else {
      console.error("Expected at least one argument!");
    }
  },
});
