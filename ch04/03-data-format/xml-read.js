var client = require('cheerio-httpcli');
var cheerio = require('cheerio');

var url = "http://www.city.yokohama.lg.jp/somu/org/kikikanri/data/shelter.xml";
var param = {};
client.fetch(url, param, function(err, $, res) {
  if (err) { console.log("Error:", err); return; }
  var xml = $.xml();
  a = cheerio.load(xml);

  a("Shelter").each(function(i, el){
    var name = $(this).children("Name").text();
    var ward = $(this).children("Ward").text();
    console.log(ward, name);
  });
});
