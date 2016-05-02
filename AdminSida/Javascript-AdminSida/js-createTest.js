/**
 * Created by Jannike on 2016-04-27.
 */

var questionNumber = 1;

$(document).ready(function () {
    document.getElementById("createQuestionForm").style.visibility = "hidden";
    document.getElementById("saveTest").style.visibility = "hidden";
});

function saveTestInfo() {
    // validates that value for vg-limit > g-limit
    // if the test only is of consists of g-questions the vg-limits must be set to 101
    var gPercent = +document.getElementById("gPercent").value;
    var vgPercent = +document.getElementById("vgPercent").value;
    var onlyGquestions = document.getElementById('onlyGId').checked;

    if (onlyGquestions) {
        document.getElementById("createQuestionForm").style.visibility = "visible";
        document.getElementById("questionId").innerHTML = "Fråga " + questionNumber;
    } else if (vgPercent <= gPercent) {
        alert("Gränsen för VG måste vara högre än för G." + "\nG-gräns: " + gPercent +
            "\nVG-gräns: " + vgPercent);
    } else {
        document.getElementById("createQuestionForm").style.visibility = "visible";
        document.getElementById("questionId").innerHTML = "Fråga " + questionNumber;
    }
}
function saveQuestion() {
    // spara data
    document.getElementById("questionId").innerHTML = "Fråga " + ++questionNumber;
    document.getElementById("saveTest").style.visibility = "visible";
}

$("#saveQuestionBtn").click(function(){
    $('#createQuestionForm')[0].reset();
    $("#singleC").hide();
    $("#multiC").hide();
    $("#open").hide();
});
