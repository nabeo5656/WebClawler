// モジュールの取り込み
var client = require('cheerio-httpcli');
var URL = require('url');

// ダウンロード
var url = "https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%8C";
var param = {};

// ダウンロード
client.fetch(url, param, function(err, $, res) {
  if (err) { console.log("Error:", err); return; }
  // リンクを抽出して表示
  $("img").each(function(idx){
    var src = $(this).attr('src');
    var src = URL.resolve(url, src);
    console.log(src);
  });
});
