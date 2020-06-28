const Binance = require ('node-binance-api')
//require('dotenv').config();

// I n s t a n t i a t e  T h e  E x c h a n g e  O b j e c t :
const binance = new Binance().options({
  APIKEY: '58dpa4DvxQvEdGdsMQON3VueLTTR6qUUBZdTTcCGCNPnQkGH7umVH7vizgdG1vni',
  APISECRET: 'hsTqehYpdBRd7t6rPjcAljMSpXuFKlPSJmQC18WnZfFynjL5LMgcpG9djDSKSTdg',
  useServerTime: true,
  recvWindow: 4000,
  verbose: true,
  test: false, //---------------------------------------------------test mode?
  reconnect: true
});

// E x p o r t  F u n c t i o n
export default function theBalance(req, res) {

  // Retrieve the request's body and parse it as JSON
  var postData = req.body;  // var postData = JSON.parse(req.body);
  //console.log(postData);
  binance.balance((error, balances) => {
    if ( error ) return console.error(error);
    console.info("balances()", balances);
    console.info(`BTC balance: ${balances.BTC.available});
  });
  
  // G e t  T r a d e s 
  binance.trades(postData.symbol, function(error, json) {
    console.log( "trade history:", json )
  })
  
  // F u l f i l l  O u r  P r o m i s e s 
  res.json(postData.symbol)
  res.end(200)
}
