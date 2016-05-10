/**
 * Created by JRW on 2016-05-06.
 */


function getTestBreakdown() {

    var chosenTest = sessionStorage.getItem('chosenTest');
    var corTest = JSON.parse(localStorage.getItem('correctedtest'));

    //loading tests from localstorage
    //finding the the test that should be answered
    var testindex = 0;
    for(var y = 0; y < corTest.testName.length;y++){
        if (chosenTest == corTest.testName[y]){
            console.log("Hittade test id = "+ y);
            testindex = y;
            break;
        }
    }

    var  contain = document.createElement("div");

    for(var t = 0 ; t < corTest.questionString[testindex].length ; t++) {
        //var s = corTest.questionString[testindex][t];
        var stuff = document.createElement("p");

        console.log('t = ' + t);

        var text = document.createTextNode("Frågan var : " + corTest.questionString[testindex][0][t] +
            "ditt svar var : " + corTest.studentAnswers[testindex][0][t] + "rätt svar var " + corTest.correctAnswers[testindex][0][t] +
            "antal poäng du får är " + corTest.studentPointsPerQue[testindex][t] + "bedömningen är " +
            corTest.correctionMessagePerQue[testindex][t]);
        console.log(text);
        stuff.appendChild(text);
        contain.appendChild(stuff);

    }


    document.getElementById("res").appendChild(document.createTextNode(corTest.studentGrade[corTest.studentGrade.length -1]));
     document.body.appendChild(contain);
}