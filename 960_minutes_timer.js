function clock()
{   
    // 取得
    var now = new Date();
    // 時
    var h = now.getHours();
    // 分
    var mi = now.getMinutes();
    // 秒
    var ms = ( now.getSeconds() * 1000 ) + now.getMilliseconds();

    if( h > 8 ){
        var totalMins = ('000' + (1440 - (h * 60 + mi))).slice( -3 );
	var preText = "Time left today";
	var bodyText = "平均的な人の1日の活動時間は、16時間前後。<br>一見長くも見える時間ですが、分に直すと960分です。なんだか急に短いように感じられませんか？<br>過行く時を肌に感じ、今日残された時間をより良く過ごしましょう。<br>";
        var color00 = "#EEEEEE";
        var color01 = "#000000";
        var color02 = "#BBBBBB";
        var color03 = "#444444";
        var color04 = "#888888";
    } else {
        var totalMins = ('000' + (480 - (h * 60 + mi))).slice( -3 );
	var preText = "Time until next morning";
	var bodyText = "十分な睡眠は明日の活力に繋がります。<br>";
        var color00 = "#333333";
        var color01 = "#222222";
        var color02 = "#666666";
        var color03 = "#222222";
        var color04 = "#222222";
    }


    var totalSecs = ('00' + Math.floor((100000 - (ms * (10/6)))/1000)).slice( -2 );

    document.getElementById("bodyColor").style.backgroundColor = color00;
    document.getElementById("title").style.color = color01;
    document.getElementById("followText").style.color = color02;
    document.getElementById("preText").innerHTML = preText;
    document.getElementById("preText").style.color = color02;
    document.getElementById("timer_minutes").innerHTML = totalMins;
    document.getElementById("timer_minutes").style.color = color01;
    document.getElementById("timer_seconds").innerHTML = "." + totalSecs;
    document.getElementById("timer_seconds").style.color = color03;
    document.getElementById("timer_timescale").style.color = color04;
    document.getElementById("bodyText").innerHTML = bodyText;
    document.getElementById("bodyText").style.color = color02;

}
setInterval(clock, 1);
