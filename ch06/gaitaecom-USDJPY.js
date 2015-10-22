var client = require('cheerio-httpcli');

var url = "http://www.gaitame.com/market/kawase.html";

client.fetch(url, {}, function(err, $, res){
  if (err) { console.log(err); return; }
  var bid = $("tr.usd_jpy").children(".bid").children()[0];
  //var bid = $("tr.usd_jpy").nextAll();
  console.log(bid);return;
  //var ask = $("#USDJPY_detail_ask").text();

  //console.log("Bid=" + bid);
  //console.log("Ask=" + ask);
});
