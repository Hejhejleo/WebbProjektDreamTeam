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

    for(var h = 0; h < parsed.answerType[testindex].length;h++) {
        var questions = document.getElementsByClassName("question : " + h);


        if (parsed.answerType[testindex][h] == "singleChoice") {
            for (var k = 0; k < questions.length; k++) {
                if (questions[k].checked == true) {
                    console.log("checked = " + k);
                    studentAnsArray.push(k);

                }
            }
        }
        if(parsed.answerType[testindex][h] == "multiChoice"){
            var mult =[];
            for (var t = 0 ; t < questions.length ; t++){
                if(questions[t].checked == true){
                    mult.push(t);
                }
            }
            studentAnsArray.push(mult);
        }

        if (parsed.answerType[testindex][h] == "open") {

            var test = questions[0].value;
            studentAnsArray.push(test);

        }
    }
    console.log(studentAnsArray);
}