/**
 * Created by Reza on 2016-05-04.
 */

/**
 * Created by JRW on 2016-05-04.
 */
var parsed;
var studentAnsArray = [];
var testindex = 0;
var studentAnswerArrayAsText = [];
//var actualtestname = "test2";
var chosenTest = sessionStorage.getItem('chosenTest');

function getTestDoneData() {


    //loading tests from localstorage
    parsed = JSON.parse(localStorage.getItem('testdata'));
    //finding the the test that should be answered

    for (var y = 0; y < parsed.testName.length; y++) {
        if (chosenTest == parsed.testName[y]) {
            console.log("Hittade test id = " + y);
            testindex = y;
            break;
        }
    }

    var indexToPushSc = null;

    for(var h = 0; h < parsed.answerType[testindex].length;h++) {
        var questions = document.getElementsByClassName("question : " + h);


        if (parsed.answerType[testindex][h] == "singleChoice") {
            for (var k = 0; k < questions.length; k++) {
                if (questions[k].checked == true) {
                    console.log("checked = " + k);
                    indexToPushSc = k;


                }
                else{

                }
            }
            studentAnsArray.push(indexToPushSc);
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
    saveDoneTest();

}

function saveDoneTest() {

    savedTest = JSON.parse(localStorage.getItem("savedtest"));
    if (savedTest == null) {
        var obj = {
            "testName": [["test1"]],
            "testTime": [[40]],
            "questionString": [[["huvudstad?"], ["Städer?"]]],
            "answerType": [["singleChoice", "multiChoice"]],
            "points": [[1,2]],
            "answers": [[["Stockholm", "Göteborg", "Malmö", "Luleå"], ["Göteborg", "Stenköping", "London"]]],
            "correctAnswers": [[["Stockholm"], ["Göteborg", "London"]]],
            "gProcent": [[60]],
            "vgProcent": [[80]],
            "autoCorrect": [[1]],
            "studentmail": [["r@r.com"]],
            "studentAnswers": [[["Göteborg"],["Göteborg", "Stenköping"]]]

        }
        var objdata = JSON.stringify(obj);
        localStorage.setItem("savedtest", objdata);
    }

    var questionArray = [];
    for(var i = 0 ; i<parsed.questionString[testindex].length ; i++){
        questionArray.push(parsed.questionString[testindex][i]);
    }

    var answerTypeArray = [];
    for(var i = 0 ; i<parsed.answerType[testindex].length ; i++){
        answerTypeArray.push(parsed.answerType[testindex][i]);
    }

    var pointsArray = [];
    for(var i = 0 ; i<parsed.points[testindex].length ; i++){
        pointsArray.push(parsed.points[testindex][i]);
    }

    var answersArray = [];
    for(var i = 0 ; i<parsed.answers[testindex].length ; i++){
        answersArray.push(parsed.answers[testindex][i]);
    }

    var correctAnswersArray = [];
    correctAnswersArray.push(parsed.correctAnswers[testindex]);

    var gProcentArray = [];
    for(var i = 0 ; i<parsed.gProcent[testindex].length ; i++){
        gProcentArray.push(parsed.gProcent[testindex][i]);
    }

    var vgProcentArray = [];
    for(var i = 0 ; i<parsed.vgProcent[testindex].length ; i++){
        vgProcentArray.push(parsed.vgProcent[testindex][i]);
    }

    var autocorrectArray = [];
    for(var i = 0 ; i<parsed.autoCorrect[testindex].length ; i++){
        autocorrectArray.push(parsed.autoCorrect[testindex][i]);
    }

    var mailArray = [];
    var userMail = sessionStorage.getItem('loggedInAs');
    mailArray.push(userMail);


    //var answerArray1 = [];
    var answerArray2 = [];
    //var answerArray3 = [];

    var s = 0;
    while (s<studentAnsArray.length) {
        console.log(studentAnsArray.length);
        if(parsed.answerType[testindex][s] == 'singleChoice'){
            //answerArray1.push(parsed.answers[testindex][s][studentAnsArray[s]]);
            studentAnswerArrayAsText.push(parsed.answers[testindex][s][studentAnsArray[s]]);
            s++;
        }
        else if(parsed.answerType[testindex][s] == 'multiChoice'){
            for(var j = 0 ; j< studentAnsArray[s].length ; j++){
                answerArray2.push(parsed.answers[testindex][s][studentAnsArray[s][j]]);
            }
            studentAnswerArrayAsText.push(answerArray2);
            s++;
        }
        else if(parsed.answerType[testindex][s] == 'open'){
            //answerArray3.push(studentAnsArray[s]);
            studentAnswerArrayAsText.push(studentAnsArray[s]);
            s++;
        }
    }

    var parsed2 = JSON.parse(localStorage.getItem('savedtest'));

    parsed2.testName.push(parsed.testName[testindex]);
    parsed2.testTime.push(parsed.testTime[testindex]);
    parsed2.questionString.push(questionArray);
    parsed2.answerType.push(answerTypeArray);
    parsed2.points.push(pointsArray);
    parsed2.answers.push(answersArray);
    parsed2.correctAnswers.push(correctAnswersArray);
    parsed2.gProcent.push(gProcentArray);
    parsed2.vgProcent.push(vgProcentArray);
    parsed2.autoCorrect.push(autocorrectArray);
    parsed2.studentmail.push(mailArray);
    parsed2.studentAnswers.push(studentAnswerArrayAsText);

    var objdata = JSON.stringify(parsed2);
    localStorage.setItem("savedtest", objdata);

    if(parsed.autoCorrect[testindex] == 1){
        correctTest();
    }
    else{

    }

}


function correctTest() {

    var correctedTest = JSON.parse(localStorage.getItem("correctedtest"));
    if (correctedTest == null) {
        var obj = {
            "testName": [["test1"]],
            "testTime": [[40]],
            "questionString": [[["huvudstad?"], ["Städer?"]]],
            "answerType": [["singleChoice", "multiChoice"]],
            "points": [[1,2]],
            "answers": [[["Stockholm", "Göteborg", "Malmö", "Luleå"], ["Göteborg", "Stenköping", "London"]]],
            "correctAnswers": [[["Stockholm"], ["Göteborg", "London"]]],
            "gProcent": [[60]],
            "vgProcent": [[80]],
            "autoCorrect": [[1]],
            "studentmail": [["r@r.com"]],
            "studentAnswers": [[["Göteborg"],["Göteborg", "Stenköping"]]],
            "studentPointsPerQue": [[0,1]],
            "correctionMessagePerQue": [["fel","delvis rätt"]],
            "totalStudentPoints": [[1]],
            "studentGrade": [["IG"]]

        }
        var objdata = JSON.stringify(obj);
        localStorage.setItem("correctedtest", objdata);
    }

    var savedTest = JSON.parse(localStorage.getItem("savedtest"));

    var questionArray = [];
    questionArray.push(savedTest.questionString[testindex]);


    var answerTypeArray = [];
    answerTypeArray.push(savedTest.answerType[testindex]);


    //var pointsArray = [];
    //pointsArray.push(savedTest.points[testindex]);


    var answersArray = [];
    answersArray.push(savedTest.answers[testindex]);


    var correctAnswersArray = [];
    correctAnswersArray.push(savedTest.correctAnswers[testindex]);


    var gProcentArray = [];
    gProcentArray.push(savedTest.gProcent[testindex]);


    var vgProcentArray = [];
    vgProcentArray.push(savedTest.vgProcent[testindex]);


    var autocorrectArray = [];
    autocorrectArray.push(savedTest.autoCorrect[testindex]);


    var mailArray = [];
    var userMail = sessionStorage.getItem('loggedInAs');
    mailArray.push(userMail);

    var savedTestIndex = -1;
    for (var y = 0; y < savedTest.testName.length; y++) {
        if (chosenTest == savedTest.testName[y]) {
            savedTestIndex = y;
            break;
        }
    }
    console.log('savedTestIndex' + savedTestIndex);

    var studentPointsPerQueArray = [];
    var s = 0;
    var multiQuePoints = 0;
    while (s<studentAnsArray.length) {
        if(savedTest.answerType[savedTestIndex][s] == 'singleChoice'){

            if(studentAnswerArrayAsText[s]== savedTest.correctAnswers[savedTestIndex][0][s]){
                studentPointsPerQueArray.push(savedTest.points[savedTestIndex][s]);
            }
            else{
                studentPointsPerQueArray.push(0);
            }


            s++;
        }
        else if(savedTest.answerType[savedTestIndex][s] == 'multiChoice'){

            for(var j = 0 ; j< studentAnsArray[s].length ; j++){
                if(studentAnswerArrayAsText[s][j]== savedTest.correctAnswers[savedTestIndex][0][s][j]){
                    multiQuePoints++;
                }
            }
            studentPointsPerQueArray.push(multiQuePoints);
            s++;
        }
        else if(savedTest.answerType[savedTestIndex][s] == 'open'){
            studentPointsPerQueArray.push(null);
            s++;
        }
    }


    var correctionMessagePerQueArray = [];

    for(var i = 0 ; i<studentAnsArray.length ; i++){
        if(savedTest.points[savedTestIndex][i] == studentPointsPerQueArray[i]){
            correctionMessagePerQueArray.push("Rätt!");
        }
        else if(studentPointsPerQueArray[i] > 0){
            correctionMessagePerQueArray.push("Delvis rätt!");
        }
        else{
            correctionMessagePerQueArray.push("Fel!");
        }
    }

    var totalStudentPointsArray = [];
    var toPoints = 0;

    for(var i = 0 ; i<studentPointsPerQueArray.length ; i++){
        toPoints += studentPointsPerQueArray[i];
    }
    totalStudentPointsArray.push(toPoints);

    sumOfTotalTestPoints = 0;
    for(var i = 0 ; i<savedTest.points[savedTestIndex].length ; i++){
        sumOfTotalTestPoints += savedTest.points[savedTestIndex][i];
    }

    var gPoints = ((savedTest.gProcent[savedTestIndex]) * (sumOfTotalTestPoints)) / 100;
    var vgPoints = ((savedTest.vgProcent[savedTestIndex]) * (sumOfTotalTestPoints)) / 100;

    var studentGradeArray = [];

    if(totalStudentPointsArray[0] >= vgPoints){
        studentGradeArray.push("VG");
    }
    else if (totalStudentPointsArray[0] >= gPoints){
        studentGradeArray.push("G");
    }
    else{
        studentGradeArray.push("IG");
    }



    var parsed3 = JSON.parse(localStorage.getItem("correctedtest"));

    parsed3.testName.push(savedTest.testName[savedTestIndex]);
    parsed3.testTime.push(savedTest.testTime[savedTestIndex]);
    parsed3.questionString.push(questionArray);
    parsed3.answerType.push(answerTypeArray);
    parsed3.points.push(savedTest.points[savedTestIndex]);
    parsed3.answers.push(answersArray);
    parsed3.correctAnswers.push(correctAnswersArray);
    parsed3.gProcent.push(gProcentArray);
    parsed3.vgProcent.push(vgProcentArray);
    parsed3.autoCorrect.push(savedTest.autoCorrect[savedTestIndex]);
    parsed3.studentmail.push(mailArray);
    parsed3.studentAnswers.push(studentAnswerArrayAsText);
    parsed3.studentPointsPerQue.push(studentPointsPerQueArray);
    parsed3.correctionMessagePerQue.push(correctionMessagePerQueArray);
    parsed3.totalStudentPoints.push(totalStudentPointsArray);
    parsed3.studentGrade.push(studentGradeArray);

    var objdata = JSON.stringify(parsed3);
    localStorage.setItem("correctedtest", objdata);
    location.href="Testresultat.html";
}