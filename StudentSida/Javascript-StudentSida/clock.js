$(document).ready(function () {
    var second;
    var tests = JSON.parse(localStorage.getItem("testdata"));
    var chosenTestName = sessionStorage.getItem("chosenTest");
    var testIndex;
    var user = sessionStorage.getItem("loggedInAs");
    var timestamp;
    var secondForTest;

    getTimeForTest();
    if (localStorage.getItem(user + chosenTestName) == null) {
        setTimestamp();
        getTimestamp();
    } else {
        getTimestamp();
    }
    setSecond();


    function count() {
        second--;
        secondsToHours(second);
        if (second <= 0) {
            alert("Nu är testet slut!");
        }
    }


    setInterval(function () {
        count();
    }, 1000);


    function getTimeForTest() {
        for (var i = 0; i < tests.testName.length; i++) {
            if (chosenTestName == tests.testName[i]) {
                console.log("Hittade test index = " + i);
                testIndex = i;
                console.log(testIndex);
                break;
            }
        }
        secondForTest = tests.testTime[testIndex]*60;
        console.log("Time for Test: "+secondForTest);
    }

    function setTimestamp() {
        var date = Date.now();
        localStorage.setItem(user + chosenTestName, date);
        console.log(date);
    }

    function getTimestamp() {
        timestamp = localStorage.getItem(user + chosenTestName);
        console.log("timestamp: "+timestamp);
    }


    function secondsToHours(totalSec) {
        var hours = Math.floor(totalSec / 3600);
        var minutes = Math.floor((totalSec - (hours * 3600)) / 60);
        var seconds = totalSec - (hours * 3600) - (minutes * 60);

        var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

        $("#counter").html(result);
    }

    function setSecond() {
        var date = Date.now();
        console.log("date: "+date);
        var temp = date - timestamp;
        console.log("temp1: "+temp);
        temp = temp / 1000;
        console.log("temp2: "+temp);
        temp = Math.round(temp);
        console.log("temp3: "+temp);
        temp = secondForTest - temp;
        console.log("sft: "+secondForTest);
        second = temp;
        console.log("second: "+second);
    }

});