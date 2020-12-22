const { Board, Led } = require("johnny-five");
const board = new Board();
var keypress = require('keypress');
var Logger = require("./logger.js")

const logger = new Logger()

board.on("ready", () => {
  const led = new Led(13);
  let ledOn = false  


  console.clear()
  logger.blue('Control Led by pressing SPACE')

  process.stdin.on('keypress', function (ch, key) {
     if (key && key.name == "space") {
       if(ledOn){
            led.off()
            logger.grey('LED is now off')
            ledOn = false
       }else{
            led.on()
            logger.green('LED is now on')
            ledOn = true
       }
     }
   });

});