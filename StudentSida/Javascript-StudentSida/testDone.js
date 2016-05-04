/**
 * Created by JRW on 2016-05-04.
 */
function getTestDoneData() {


    //loading tests from localstorage
    var parsed = JSON.parse(localStorage.getItem('testdata'));
    //finding the the test that should be answered
    var actualtestname = "testtest";
    var testindex = 0;
    for (var y = 0; y < parsed.testName.length; y++) {
        if (actualtestname == parsed.testName[y]) {
            console.log("Hittade test id = " + y);
            testindex = y;
            break;
        }
    }
    var studentAnsArray = [];



    if (parsed.answerType[testindex][0] == "singleChoice") {
        var singleChoiceAnswers = document.getElementsByClassName("singleChoiceAnswer").checked;


        singleChoiceAnswers[0].getAttribute("value");


        if (document.getElementById(parsed.answers[testindex][0][0]).checked != null) {
            studentAnsArray.push([[0]]);
        }
    }
    if (parsed.answerType[testindex][1] == "multiChoice") {
        var multiChoiceArr = [];
        document.getElementsByClassName("multiChoiceAnswer");
        if(document.getElementById(parsed.answers[testindex][0][1]).checked != null){
            multiChoiceArr.push([1]);
        }
        studentAnsArray.push(multiChoiceArr);
    }
    if (parsed.answerType[testindex][2] == "open") {
        document.getElementsByClassName("freeTexts");
    }
}