/**
 * Created by Jannike on 2016-04-27.
 */

var questionNumber = 1;

$(document).ready(function () {
    document.getElementById("createQuestionForm").style.visibility = "hidden";
});

function saveTestInfo() {
    // validera att vg-gräns > g-gräns
    var g = +document.getElementById("gPercent").value;
    var vg = +document.getElementById("vgPercent").value;
    if (vg <= g) {
        alert("Gränsen för VG måste vara högre än för G." + "\nG-gräns: " + g + "\nVG-gräns: " + vg);
    } else {
        document.getElementById("createQuestionForm").style.visibility = "visible";
        document.getElementById("questionId").innerHTML = "Fråga " + questionNumber;
    }
}
function saveQuestion() {
    // spara data
    document.getElementById("questionId").innerHTML = "Fråga " + ++questionNumber;
    document.getElementById("createQuestionForm").reset();
}
