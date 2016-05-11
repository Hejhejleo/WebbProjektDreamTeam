/**
 * Created by JRW on 2016-05-06.
 */


function getTestBreakdown() {

    var chosenTest = sessionStorage.getItem('chosenTest');
    var corTest = JSON.parse(localStorage.getItem('correctedtest'));

    //loading tests from localstorage
    //finding the the test that should be answered
    var testindex = 0;
   /* for(var y = 0; y < corTest.testName.length;y++){
        if (chosenTest == corTest.testName[y]){
            console.log("Hittade test id = "+ y);
            testindex = corTest.testName.length -1;
            break;
        }
    }*/
    testindex = ((corTest.testName.length) -1);
    console.log('testindex = ' + testindex);

    var  contain = document.createElement("div");

    var po = document.createElement("p");
    var maxPoints = 0;
    for(var i = 0 ; i<corTest.points[testindex].length; i++){
        maxPoints += corTest.points[testindex][i];
    }
    var pointsText = 'Du fick ' + corTest.totalStudentPoints[testindex] + ' poäng, av max ' + maxPoints  + ' poäng.' + '<br>' + '<br>';
    po.innerHTML = pointsText;
    contain.appendChild(po);

    console.log("hur många frågor " + corTest.questionString[testindex][0].length);
    for(var t = 0 ; t < corTest.questionString[testindex][0].length ; t++) {
        //var s = corTest.questionString[testindex][t];
        var stuff = document.createElement("p");

        console.log('t = ' + t);



        var text = 'Frågan nr : '  + (t+1) + ' var : ' + corTest.questionString[testindex][0][t] + '<br>' + ' Ditt svar var : ' + corTest.studentAnswers[testindex][t] + '<br>' + ' Rätt svar var : ' + corTest.correctAnswers[testindex][0][t] + '<br>' +' Antal poäng du får är : ' + corTest.studentPointsPerQue[testindex][t] + '<br>' +' Bedömningen är : ' + corTest.correctionMessagePerQue[testindex][t];


        //console.log(text);
        //stuff.appendChild(text);

        stuff.innerHTML = text;
        contain.appendChild(stuff);

    }


    document.getElementById("res").appendChild(document.createTextNode(corTest.studentGrade[corTest.studentGrade.length -1]));
     document.body.appendChild(contain);
}