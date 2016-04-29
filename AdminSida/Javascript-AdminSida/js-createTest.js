/**
 * Created by Jannike on 2016-04-27.
 */

var questionNumber = 1;

$(document).ready(function () {
    document.getElementById("createQuestionForm").style.visibility = "hidden";
    document.getElementById("saveTest").style.visibility = "hidden";
});

function saveTestInfo() {
    // validera att vg-gräns > g-gräns
    var g = +document.getElementById("gPercent").value;
    var vg = +document.getElementById("vgPercent").value;
    if (vg <= g) {
        alert("Gränsen för VG måste vara högre än för G.");
    } else {
        document.getElementById("createQuestionForm").style.visibility = "visible";
        document.getElementById("questionId").innerHTML = "Fråga " + questionNumber;
    }
}
function saveQuestion() {
    // spara data
    document.getElementById("questionId").innerHTML = "Fråga " + ++questionNumber;
    document.getElementById("createQuestionForm").reset();
    // ladda om formulär/reseta tillbaka till val av frågetyp
    document.getElementById("saveTest").style.visibility = "visible";
}

var app = angular.module('createQuestion', []);
app.controller('questionController', function($scope) {
    $scope.resetState = function() {
        $scope.reset();
    }
});
