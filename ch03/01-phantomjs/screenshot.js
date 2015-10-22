// CasperJSでスクリーンショットを撮る

// Casperオブジェクトを作成
var casper = require('casper').create();

// 開始する
casper.start();

// ページを開く
casper.open('http://google.co.jp');

// その後スクリーンショット撮影
casper.then(function() {
  casper.capture("/vagrant/screenshot.png");
});

// 実行
casper.run();
