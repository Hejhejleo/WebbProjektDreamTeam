/**
 * Created by JRW on 2016-04-28.
 */
var paused=false;
var second=2400;
var parsed = JSON.parse(localStorage.getItem("testdata"));
var actualtestname = "testtest";
var testindex = 0;
for(var y = 0; y < parsed.testName.length;y++){
    if (actualtestname == parsed.testName[y]){
        console.log("Hittade test id = "+ y);
        testindex = y;
        break;
    }
}
second = parsed.testTime[testindex]*60;

$( document ).ready(function() {


    function count() {
        if (!paused) {
            second--;
            secondsToHours(second);
            if (second == 0){
                paused = true;
            }
        }
    }

    setInterval(function() {
        count();
    },1000);

    $("#start").click(function () {
        paused=false;
    });

    $("#pause").click(function () {
        paused=true;
    });

    $("#reset").click(function () {
        second=0;
        secondsToHours(second)
        paused=true;
    });


    function secondsToHours(totalSec) {
        var hours   = Math.floor(totalSec / 3600);
        var minutes = Math.floor((totalSec - (hours * 3600)) / 60);
        var seconds = totalSec - (hours * 3600) - (minutes * 60);

        var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);

        $("#counter").html(result);

    }

});