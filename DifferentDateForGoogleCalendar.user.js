// ==UserScript==
// @name           DifferentDateForGoogleCalendar
// @namespace      DifferentDateForGoogleCalendar
// @description    Googleカレンダーで現在表示している日が今日から何日経過したかを表示する
// @include        http://www.google.com/calendar/render*
// @include        https://www.google.com/calendar/render*
// ==/UserScript==
(function ()
{
	var isRefresh = false;

	function $(strId) {
		return (window.wrappedJSObject || window).document.getElementById(strId);
	}
    
    // DOM変更のイベントハンドラでonSubTreeModified関数を実行
    document.addEventListener("DOMSubtreeModified", onSubTreeModified, false);

	// DOM変更に実行される関数
	function onSubTreeModified() {
		if(isRefresh == false) {
		    // 即実行では、日付のDOMが取得できないため1秒待つ
			setTimeout(getDifferentDate, 1000);
			isRefresh = true;
		}
	}

	function differentDate(dt) {
        var dtToday = new Date();
        var intDiffDate = dt - dtToday;
        return Math.floor(intDiffDate / 86400000) + 1 ; //1日=86400000ミリ秒
    }

	// 今日から何日後かを表示する
	function getDifferentDate() {

	     isRefresh = false;
	     
	     // 現在表示しているカレンダーの日付を取得 （範囲指定しているときは初日を取得）
	     var m = $("currentDate:2").innerHTML.match(/([0-9]{4})年\s*([0-9]{1,2})月\s*([0-9]{1,2})日/);

	     // m[3]（日付の日）が取得できない場合は何もしない
	     if(m[2]){
	     
	         // Date型で取得
	         var dtCurrent = new Date(m[1],m[2]-1,m[3]);

	         // 今日からの日数を取得
	         var intDiffDate = differentDate(dtCurrent);

	         // 日数によって表示するメッセージを切り替え
	         var strDiffDate = ""
	         if ( intDiffDate > 0 ){
	             strDiffDate = "今日から" + intDiffDate + "日後";
	         } else if( intDiffDate < 0 ){
	             strDiffDate = "今日から" + Math.abs(intDiffDate) + "日前";
	         } else {
	             strDiffDate = "今日";
	         }

	         // 結果を表示させるDOMが存在してなければ生成する
	         if(!$("differentDate")){
	             var elmSpanDifferentDate = document.createElement("span");
	             elmSpanDifferentDate.id = "differentDate";
	             $("currentDate:2").appendChild(elmSpanDifferentDate);
	         }
	     
	         // 日付の横に表示
	         $("differentDate").innerHTML = "　" + strDiffDate;
	     }
	}

})();