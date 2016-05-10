/**
 * Created by Reza on 2016-05-09.
 */

var testData;
var chosenTest;

var bar = new ProgressBar.Circle('#container', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#cc0000',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '180px', height: '180px'}
});

var bar2 = new ProgressBar.Circle('#container2', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#339933',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '180px', height: '180px'}
});

var bar3 = new ProgressBar.Circle('#container3', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#3366ff',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '180px', height: '180px'}
});

var bar4 = new ProgressBar.Circle('#container4', {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#EE7202',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '180px', height: '180px'}
});

bar.animate(0.0);

bar2.animate(0.0);

bar3.animate(0.0);

bar4.animate(0.0);

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

    bar.animate(percentIG / 100);




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

    bar2.animate(percentG / 100);

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

    bar3.animate(percentVG / 100);

    var numberOfPasses = 0;
    numberOfPasses = numberOfGs + numberOfVGs;
    console.log(numberOfPasses);

    bar4.animate(numberOfPasses / numberOfTestsDone);

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




