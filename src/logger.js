const chalk = require('chalk');

class Logger{
     blue(msg){
          console.log(chalk.bold(chalk.blue(msg)));
     }
     red(msg){
          console.log(chalk.bold(chalk.red(msg)));
     }
     grey(msg){
          console.log(chalk.bold(chalk.grey(msg)));
     }
     green(msg){
          console.log(chalk.bold(chalk.green(msg)));
     }
}

module.exports = Logger