const cowsay = require("cowsay");

const text= Quote.getQuote().text

 console.log(
     cowsay.say({
         text:text,
         e:"xx",
         T:"U"
     }
 )
 );