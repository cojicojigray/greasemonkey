// ==UserScript==
// @name           RakutenAutoSearch
// @namespace      RakutenAutoSearch
// @description    一定時間毎に楽天サーチのキーワードを切り替えて検索する
// @include        http://websearch.rakuten.co.jp/*
// @version        1.4
// ==/UserScript==

try{
var aryKeyWord = new Array();
aryKeyWord[0] = 'オールクーポンジャパン';
aryKeyWord[1] = 'iphone';
aryKeyWord[2] = 'apple';
aryKeyWord[3] = 'カート';
aryKeyWord[4] = 'amazon';
aryKeyWord[5] = 'google';
aryKeyWord[6] = 'twitter';
aryKeyWord[7] = 'readitlater';
aryKeyWord[8] = 'tumblr';
aryKeyWord[9] = 'facebook';
aryKeyWord[10] = 'mixi';
aryKeyWord[11] = 'セコムの食';
aryKeyWord[12] = 'superfly';
aryKeyWord[13] = 'perfume';
aryKeyWord[14] = 'mac mini';
aryKeyWord[15] = 'evernote';
aryKeyWord[16] = '情報デザイン';
aryKeyWord[17] = 'ライフハック';
aryKeyWord[18] = 'ブレインストーミング';
aryKeyWord[19] = 'マインドマップ';
aryKeyWord[20] = 'piku';
aryKeyWord[21] = 'はてな';
aryKeyWord[22] = 'qpod';
aryKeyWord[23] = '任天堂';
aryKeyWord[24] = 'HTML5';
aryKeyWord[25] = 'CSS3';
aryKeyWord[26] = 'YAHOO';
aryKeyWord[27] = 'プレゼント';
aryKeyWord[28] = 'クーポン';
aryKeyWord[29] = 'オークション';
aryKeyWord[30] = '訳あり';
aryKeyWord[31] = 'Javascript';
aryKeyWord[32] = 'Ajax';
aryKeyWord[33] = 'jquery';
aryKeyWord[34] = 'wordpress';
aryKeyWord[35] = 'movabletype';
aryKeyWord[36] = 'ポイント';
aryKeyWord[37] = 'ちはやふる';
aryKeyWord[38] = 'ワンピース';
aryKeyWord[39] = '料理';
aryKeyWord[40] = 'ポケモン';
aryKeyWord[41] = '文房具';
aryKeyWord[42] = 'TV番組表';
aryKeyWord[43] = 'プロジェクト';
aryKeyWord[44] = 'AppleScript';
aryKeyWord[45] = '自転車';
aryKeyWord[46] = 'Foursquare';
aryKeyWord[47] = 'ニコニコ';

var intInterval =10 * 60 * 1000;
var strSearchURL = "http://websearch.rakuten.co.jp/Web?qt=";
var strSearchPram = "&col=OW&svx=101102";

var dtNow = new Date();

var strKeyWord = aryKeyWord[Number(dtNow.getHours()*2+Math.floor(dtNow.getMinutes()/10))];
//var strKeyWord = aryKeyWord[Math.floor( Math.random() * 23 )];
//var strKeyWord = aryKeyWord[12];

var tidRaketenSearch=setInterval(function(){document.location.href = strSearchURL + strKeyWord + strSearchPram;},intInterval);

strResurtMessage = "<div style='font-size:9px;'>RakutenAutoSearch:　次は「" + strKeyWord + "」で検索　<a href='" + strSearchURL + strKeyWord + strSearchPram + ">いますぐ検索する</a>　("+ dtNow + ")";

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
for(i=0;i<aryAtag.length;i++){
aryAtag[i].target = "_blank";
}