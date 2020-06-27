const Binance = require('node-binance-api');
/**
 *                  t r a d e H i s t o r y ( )
 */

 // I n s t a n t i a t e  B i n a n c e  O b j
const binance = new Binance().options({
  APIKEY: "58dpa4DvxQvEdGdsMQON3VueLTTR6qUUBZdTTcCGCNPnQkGH7umVH7vizgdG1vni",
  APISECRET: "hsTqehYpdBRd7t6rPjcAljMSpXuFKlPSJmQC18WnZfFynjL5LMgcpG9djDSKSTdg",
  useServerTime: true,
  recvWindow: 4000,
  verbose: true,
  test: false, //---------------------------------------------------test mode?
  reconnect: true,
});

// E x p o r t  D e f a u l t  F u n c t i o n
export default function allTrades(req, res) {
  var postData = req.body; // var postData = JSON.parse(req.body);

  // G e t  T r a d e s
  binance.trades(postData.symbol, function (error, json) {
    if (error) return console.error(error);
    console.log( JSON.stringify( json ) );
  });

  // K e e p  O u r  P r o m i s e
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(postData));
}
