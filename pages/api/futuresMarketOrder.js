const Binance = require ('node-binance-api')
require('dotenv').config();

// E x p o r t  
export default async function marketOrder(req, res) {
    
  // I n s t a n t i a t e  T h e  E x c h a n g e  O b j e c t
  const binance = new Binance().options({
    APIKEY: process.env.BINANCE_APIKEY,
    APISECRET: process.env.BINANCE_SECRET,
    useServerTime: true,
    recvWindow: 4000,
    verbose: true,
    test: false, //---------------------------------------------------test mode?
    reconnect: true
  });

  // V a r i a b l e s
  const symbol = 'BTCUSDT'
  const qtyBtc = 0.05

  let result = await binance.futuresMarketBuy( symbol, qtyBtc )
  await console.log(result)
  
  res.statusCode = 200
  res.end()
}
