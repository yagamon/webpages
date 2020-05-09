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

    var totalMins = ('000' + (1440 - (h * 60 + mi))).slice( -3 );
    var totalSecs = ('00' + Math.floor((100000 - (ms * (10/6)))/1000)).slice( -2 );

    document.getElementById("timer_minutes").innerHTML = totalMins;
    document.getElementById("timer_seconds").innerHTML = "." + totalSecs;
}

setInterval(clock, 1);