const Binance = require("node-binance-api");
/**
 *                          H E A D E R
 */
const binance = new Binance().options({
  APIKEY: "58dpa4DvxQvEdGdsMQON3VueLTTR6qUUBZdTTcCGCNPnQkGH7umVH7vizgdG1vni",
  APISECRET: "hsTqehYpdBRd7t6rPjcAljMSpXuFKlPSJmQC18WnZfFynjL5LMgcpG9djDSKSTdg",
  useServerTime: true,
  recvWindow: 4000,
  verbose: true,
  test: false, //---------------------------------------------------test mode?
  reconnect: true,
});

module.exports = binance;