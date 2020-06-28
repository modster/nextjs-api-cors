const Binance = require ('node-binance-api')
//require('dotenv').config();

// I n s t a n t i a t e  T h e  E x c h a n g e  O b j e c t :
const binance = new Binance().options({
  APIKEY: "58dpa4DvxQvEdGdsMQON3VueLTTR6qUUBZdTTcCGCNPnQkGH7umVH7vizgdG1vni",
  APISECRET: "hsTqehYpdBRd7t6rPjcAljMSpXuFKlPSJmQC18WnZfFynjL5LMgcpG9djDSKSTdg",
  useServerTime: true,
  recvWindow: 4000,
  verbose: true,
  test: false, //---------------------------------------------------test mode?
  reconnect: true,
});

// E x p o r t  F u n c t i o n
export default function theBalance(req, res) {
  let postData = req.body; 
  binance.balance((error, balances) => {
    if ( error ) return console.error(error);
    //console.info("balances()", balances);
    console.info(`BTC balance: ${balances.BTC.available}`);
  });

  // K e e p  O u r  P r o m i s e
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(postData));
}
