/**
 * Created by Reza on 2016-05-09.
 */

var testData;
var chosenTest;

$(".getClasses2").click(function () {
    console.log("getClasses2");
    testData = JSON.parse(localStorage.getItem("testdata"));
    $("#selectProv").empty();

    $options = $("<option></option>");
    $("#selectProv").append($options)
    for (var i = 0; i < testData.testName.length; i++) {
        var $options = null;
        $options = $("<option> " + testData.testName[i] + "</option>")
        $("#selectProv").append($options)
    }


});

$("#selectProv").change(function () {
    chosenTest = $("#selectProv").val();
    getStats();
});

function getStats() {

    var correctedTest = JSON.parse(localStorage.getItem("correctedtest"));
    var numberOfTestsDone = 0;
    var indexOfChosenTest = -1;

    for(var i = 0 ; i<correctedTest.testName.length ; i++){
        if(correctedTest.testName[i] == chosenTest){
            indexOfChosenTest = i;
            numberOfTestsDone++;
        }
    }
    console.log(numberOfTestsDone);

    var labelAmount = document.getElementById('amount');
    labelAmount.innerHTML = numberOfTestsDone;

    var totalTestPoints = 0;
    for(var i = 0 ; i<correctedTest.points[indexOfChosenTest].length ; i++){
        totalTestPoints += correctedTest.points[indexOfChosenTest][i];

    }

    var max = document.getElementById('maxPoints');
    max.innerHTML = totalTestPoints;

    var numberOfIGs = 0;
    for(var i = 0 ; i<correctedTest.studentGrade.length ; i++) {
        if (correctedTest.testName[i] == chosenTest) {

            if (correctedTest.studentGrade[i] == 'IG') {
                numberOfIGs++;
            }
        }
    }

    var IGlabel = document.getElementById('IGs');
    IGlabel.innerHTML = numberOfIGs;

    var percentIG = 0;
    percentIG = (numberOfIGs * 100) / numberOfTestsDone;
    var IGpercentLabel = document.getElementById('procentIG');
    IGpercentLabel.innerHTML = percentIG.toFixed(2) + '%';

    var numberOfGs = 0;
    for(var i = 0 ; i<correctedTest.studentGrade.length ; i++) {
        if (correctedTest.testName[i] == chosenTest) {

            if (correctedTest.studentGrade[i] == 'G') {
                numberOfGs++;
            }
        }
    }

    var Glabel = document.getElementById('Gs');
    Glabel.innerHTML = numberOfGs;

    var percentG = 0;
    percentG = (numberOfGs * 100) / numberOfTestsDone;
    var GpercentLabel = document.getElementById('procentG');
    GpercentLabel.innerHTML = percentG.toFixed(2) + '%';

    var numberOfVGs = 0;
    for(var i = 0 ; i<correctedTest.studentGrade.length ; i++) {
        if (correctedTest.testName[i] == chosenTest) {

            if (correctedTest.studentGrade[i] == 'VG') {
                numberOfVGs++;
            }
        }
    }

    var VGlabel = document.getElementById('VGs');
    VGlabel.innerHTML = numberOfVGs;

    var percentVG = 0;
    percentVG = (numberOfVGs * 100) / numberOfTestsDone;
    var VGpercentLabel = document.getElementById('procentVG');
    VGpercentLabel.innerHTML = percentVG.toFixed(2) + '%';

    var numberOfPasses = 0;
    numberOfPasses = numberOfGs + numberOfVGs;

    var passesLabel = document.getElementById('passes');
    passesLabel.innerHTML = numberOfPasses;

    var passesProcent = percentG + percentVG;
    var ppLabel = document.getElementById('procentPasses');
    ppLabel.innerHTML = passesProcent.toFixed(2) + '%';

    var averagePoints = 0;
    for(var i = 0 ; i<correctedTest.totalStudentPoints.length ; i++) {
        if (correctedTest.testName[i] == chosenTest) {
            averagePoints += correctedTest.totalStudentPoints[i][0];
            //console.log(correctedTest.totalStudentPoints[i]);
        }
    }
    averagePoints = (averagePoints / numberOfTestsDone).toFixed(2);

    var averageLabel = document.getElementById('average');
    averageLabel.innerHTML = averagePoints;



}

