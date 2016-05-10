/**
 * Created by JRW on 2016-05-06.
 */


function getTestBreakdown() {

    var chosenTest = sessionStorage.getItem('chosenTest');
    var corTest = JSON.parse(localStorage.getItem(('correctedtest')));

    //loading tests from localstorage
    //finding the the test that should be answered
    var testindex = 0;
    for(var y = 0; y < corTest.testName.length;y++){
        if (chosenTest == parsed.testName[y]){
            console.log("Hittade test id = "+ y);
            testindex = y;
            break;
        }
    }

    var  contain = document.createElement("div");

    for(var t = 0 ; t < parsed.questionString[testindex] ; t++) {
        var s = parsed.questionString[testindex][t];
        var stuff = document.createElement("p");
        var text = document.createTextNode("Frågan var : " + corTest.questionString[testindex][t] + "ditt svar var : " + corTest.studentAnswers[testindex][t] + "rätt svar var " + corTest[testindex][t] + "antal poäng du får är " + corTest.studentPointsPerQue[testindex] + "bedömningen är " + corTest.correctionMessagePerQue[t]);
        stuff.appendChild(text);
        contain.appendChild(stuff);

    }

    document.getElementById("res").appendChild(document.createTextNode(corTest.studentGrade[testindex]));
     document.body.appendChild(contain);
}