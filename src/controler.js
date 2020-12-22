const { Board, Led } = require("johnny-five");
const board = new Board();
var keypress = require('keypress');
const chalk = require('chalk');


board.on("ready", () => {
  const led = new Led(13);
  let ledOn = false


  console.clear()
  console.log(chalk.bold(chalk.blue('Control Led by pressing SPACE')));

  process.stdin.on('keypress', function (ch, key) {
     if (key && key.name == "space") {
       if(ledOn){
            led.off()
            console.log(chalk.bold(chalk.grey('LED is now off')));
            ledOn = false
       }else{
            led.on()
            console.log(chalk.bold(chalk.green('LED is now on')));
            ledOn = true
       }
     }
   });

});