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

}

