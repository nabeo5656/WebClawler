// モジュールの取り込み
var client = require('cheerio-httpcli');
var URL = require('url');

// ダウンロード
var url = "http://www.aozora.gr.jp/index_pages/person81.html";
var param = {};

// ダウンロード
client.fetch(url, param, function(err, $, res) {
  if (err) { cosole.log("Error:", err); return; }
  // リンクを抽出して表示
  $("a").each(function(idx){
    var text = $(this).text();
    var href = $(this).attr('href');
    if (!href) return;
    // 相対パスを絶対パスに直す
    var href2 = URL.resolve(url, href);
    // 結果を表示
    console.log(text + " : " + href);
    console.log("  ⇒ " + href2 + "\n");
  });
});
