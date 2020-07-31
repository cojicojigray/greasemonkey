// ==UserScript==
// @name         RakutenAutoSearch
// @namespace    RakutenAutoSearch
// @version      1.5
// @description  一定時間毎に楽天サーチのキーワードを切り替えて検索する
// @author       You
// @match        https://websearch.rakuten.co.jp/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

try{
var aryKeyWord = new Array();
aryKeyWord.push('クーポン');
aryKeyWord.push('iphone');
aryKeyWord.push('apple');
aryKeyWord.push('カート');
aryKeyWord.push('amazon');
aryKeyWord.push('google');
aryKeyWord.push('twitter');
aryKeyWord.push('pocket');
aryKeyWord.push('tumblr');
aryKeyWord.push('facebook');
aryKeyWord.push('slack');
aryKeyWord.push('セコムの食');
aryKeyWord.push('superfly');
aryKeyWord.push('perfume');
aryKeyWord.push('mac mini');
aryKeyWord.push('evernote');
aryKeyWord.push('情報デザイン');
aryKeyWord.push('ライフハック');
aryKeyWord.push('ブレインストーミング');
aryKeyWord.push('マインドマップ');
aryKeyWord.push('Youtube');
aryKeyWord.push('はてな');
aryKeyWord.push('AWS');
aryKeyWord.push('任天堂');
aryKeyWord.push('HTML5');
aryKeyWord.push('CSS3');
aryKeyWord.push('YAHOO');
aryKeyWord.push('プレゼント');
aryKeyWord.push('割引チケット');
aryKeyWord.push('オークション');
aryKeyWord.push('訳あり');
aryKeyWord.push('Javascript');
aryKeyWord.push('Ajax');
aryKeyWord.push('jquery');
aryKeyWord.push('wordpress');
aryKeyWord.push('movabletype');
aryKeyWord.push('ポイント');
aryKeyWord.push('ちはやふる');
aryKeyWord.push('ワンピース');
aryKeyWord.push('料理');
aryKeyWord.push('ポケモン');
aryKeyWord.push('文房具');
aryKeyWord.push('TV番組表');
aryKeyWord.push('プロジェクト');
aryKeyWord.push('AppleScript');
aryKeyWord.push('自転車');
aryKeyWord.push('コロナウィルス');
aryKeyWord.push('あまちゃん');
aryKeyWord.push('屋久島');
aryKeyWord.push('静岡県');
aryKeyWord.push('岩手県');
aryKeyWord.push('旅行');
aryKeyWord.push('登山');
aryKeyWord.push('どうぶつの森');
aryKeyWord.push('zoom');
aryKeyWord.push('Teams');
aryKeyWord.push('コミュニティツール');
aryKeyWord.push('RPA');
aryKeyWord.push('クイズ');
aryKeyWord.push('テニス');
aryKeyWord.push('マインクラフト');
aryKeyWord.push('ニュース');
aryKeyWord.push('メタルクラフト');
aryKeyWord.push('Kubernetes');
aryKeyWord.push('Azure');




var intInterval = (5+Math.floor(Math.random()*5)) * 60 * 1000;
var strSearchURL = "http://websearch.rakuten.co.jp/Web?qt=";
var strSearchPram = "&col=OW&svx=101102";

var dtNow = new Date();

//var strKeyWord = aryKeyWord[Number(dtNow.getHours()*2+Math.floor(dtNow.getMinutes()/10))];
var strKeyWord = aryKeyWord[Math.floor( Math.random() * aryKeyWord.length )];
//var strKeyWord = aryKeyWord[12];

var tidRaketenSearch=setInterval(function(){document.location.href = strSearchURL + strKeyWord + strSearchPram;},intInterval);

var strResurtMessage = "<div style='font-size:9px;'>RakutenAutoSearch:　次は「<a id='RAS' href='" + strSearchURL + strKeyWord + strSearchPram + "'>" + strKeyWord + "</a>」で検索";

} catch(e) {
strResurtMessage = "<div style='font-size:9px;color:red;'>RakutenAutoSearch:"+e+"</div>";
}

// 画面トップに処理結果を表示させる
var debugDiv = document.createElement('DIV');
debugDiv.style.margin = "10px";
debugDiv.innerHTML = strResurtMessage;
document.body.insertBefore(debugDiv,document.body.firstChild);

// 楽天サーチの画面を維持させるためにリンクは全て別タブで表示させる
var aryAtag = document.getElementsByTagName("a");
var i;
for(i=0;i<aryAtag.length;i++){
    if(aryAtag[i].id != "RAS"){
        aryAtag[i].target = "_blank";
    }
}
})();
