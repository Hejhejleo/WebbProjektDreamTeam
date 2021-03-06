/**
 * Created by Reza on 2016-04-29.
 */

var parsed;
var testStorageName = 'testdata';
var questionNumber = 1;

var testName;
var testTime;
var gPercent;
var vgPercent;
var onlyGquestions;

var testNameArray = [];
var testTimeArray = [];
var gProcentArray = [];
var vgProcentArray = [];
var questionArray = [];
var imageURLArray = []; //TODO bildhantering
var answerArray = [];
var pointsArray = [];
var correctAnswersArray = [];
var questionTypeArray = [];
var isChecked = false;
var answerNotChecked = false;

var questionText;
var questionType;
var imageURL; //TODO bildhantering
var numberOfAnswers;
var answers = [];
var answer1, answer2, answer3, answer4, answer5, answer6;
var answer1Radio, answer2Radio, answer3Radio, answer4Radio;
var answer1Chb, answer2Chb, answer3Chb, answer4Chb, answer5Chb, answer6Chb;
var correctAnswer;
var corrAnsCheckArray = [];
var points;
var autoCorr = 1;

var out = document.getElementById('output');

$(document).ready(function () {
    document.getElementById("createQuestionForm").style.visibility = "hidden";
    document.getElementById("saveTest").style.visibility = "hidden";
});

// TODO saveTestInfo
function saveTestInfo() {

    testName = document.getElementById('testName').value;
    testTime = +document.getElementById('testTime').value;
    gPercent = +document.getElementById('gPercent').value;
    vgPercent = +document.getElementById('vgPercent').value;
    onlyGquestions = document.getElementById('onlyGId').checked;

    var newTestName = "";
    newTestName = $("#testName").val();
    var existingTests = JSON.parse(localStorage.getItem("testdata"));
    var newTestNameArray = new Array();
    var isNewName = true;

    if (testName == "") {
        alert("Ange ett namn på testet")
    } else {
        for (var i = 0; i < existingTests.testName.length; i++) {
            if (newTestName == existingTests.testName[i]) {
                alert("Det finns redan ett test med det namnet, välj ett annat namn");
                isNewName = false;
            }
        }

        if (isNewName == true) {
            if (testTime === 0) {
                alert("Ange tid för testet")
            } else if (gPercent === 0) {
                alert("Ange gräns för godkänd")
            } else if (onlyGquestions) {
                vgPercent = 101;
                document.getElementById("createQuestionForm").style.visibility = "visible";
                document.getElementById("questionId").innerHTML = "Fråga " + questionNumber;
                testNameArray.push(testName);
                testTimeArray.push(testTime);
                gProcentArray.push(gPercent);
                vgProcentArray.push(vgPercent);
                // TODO onlyGquestions används inte vidare i koden, om vgpercent = null bara G-frågor?

            } else if (vgPercent <= gPercent) {
                alert("Gränsen för VG måste vara högre än för G.");
            } else {
                document.getElementById("createQuestionForm").style.visibility = "visible";
                document.getElementById("questionId").innerHTML = "Fråga " + questionNumber;
                testNameArray.push(testName);
                testTimeArray.push(testTime);
                gProcentArray.push(gPercent);
                vgProcentArray.push(vgPercent);
                // TODO onlyGquestions används inte vidare i koden, om vgpercent = null bara G-frågor?
            }
        }
    }
}

// TODO saveQuestion
function saveQuestion() {

    questionText = document.getElementById('questionText').value;
    questionType = document.getElementById('typeId').options[document.getElementById('typeId').selectedIndex].value;
    imageURL = document.getElementById('imageURL').value; //TODO bildhantering
    points = +document.getElementById('maxPoint').value;
    isChecked = false;

    if (questionText == "") {
        alert("Ange frågetext");
    } else if (questionType == "" || questionType == 0 || questionType == '') {
        alert("Ange frågetyp");
    } else if (points <= 0) {
        alert("Ange uppgiftens poäng");
    } else {
        if (questionType === 'singleChoice') {
            numberOfAnswers = document.getElementById('numberOfAnswersSC').value;
            if (numberOfAnswers === 'twoSC') {
                answer1 = document.getElementById('answerSC12text').value;
                answer2 = document.getElementById('answerSC22text').value;
                answer1Radio = document.getElementById('answerSC12radio');
                answer2Radio = document.getElementById('answerSC22radio');
                if (answer1Radio.checked) {
                    correctAnswer = answer1;
                    isChecked = true;
                }
                else if (answer2Radio.checked) {
                    correctAnswer = answer2;
                    isChecked = true;
                }
                if (isChecked === true) {
                    answers.push(answer1);
                    answers.push(answer2);
                    correctAnswersArray.push(correctAnswer);
                }
            }
            else if (numberOfAnswers === 'threeSC') {
                answer1 = document.getElementById('answerSC13text').value;
                answer2 = document.getElementById('answerSC23text').value;
                answer3 = document.getElementById('answerSC33text').value;
                answer1Radio = document.getElementById('answerSC13radio');
                answer2Radio = document.getElementById('answerSC23radio');
                answer3Radio = document.getElementById('answerSC33radio');
                if (answer1Radio.checked) {
                    correctAnswer = answer1;
                    isChecked = true;
                }
                else if (answer2Radio.checked) {
                    correctAnswer = answer2;
                    isChecked = true;
                }
                else if (answer3Radio.checked) {
                    correctAnswer = answer3;
                    isChecked = true;
                }
                if (isChecked === true) {
                    answers.push(answer1);
                    answers.push(answer2);
                    answers.push(answer3);
                    correctAnswersArray.push(correctAnswer);
                }
            }
            else if (numberOfAnswers === 'fourSC') {
                answer1 = document.getElementById('answerSC14text').value;
                answer2 = document.getElementById('answerSC24text').value;
                answer3 = document.getElementById('answerSC34text').value;
                answer4 = document.getElementById('answerSC44text').value;
                answer1Radio = document.getElementById('answerSC14radio');
                answer2Radio = document.getElementById('answerSC24radio');
                answer3Radio = document.getElementById('answerSC34radio');
                answer4Radio = document.getElementById('answerSC44radio');
                if (answer1Radio.checked) {
                    correctAnswer = answer1;
                    isChecked = true;
                }
                else if (answer2Radio.checked) {
                    correctAnswer = answer2;
                    isChecked = true;
                }
                else if (answer3Radio.checked) {
                    correctAnswer = answer3;
                    isChecked = true;
                }
                else if (answer4Radio.checked) {
                    correctAnswer = answer4;
                    isChecked = true;
                }
                if (isChecked === true) {
                    answers.push(answer1);
                    answers.push(answer2);
                    answers.push(answer3);
                    answers.push(answer4);
                    correctAnswersArray.push(correctAnswer);
                }
            }
        }
        else if (questionType === 'multiChoice') {
            numberOfAnswers = document.getElementById('numberOfAnswersMC').value;

            if (numberOfAnswers === 'twoMC') {
                answer1 = document.getElementById('answerMC12text').value;
                answer2 = document.getElementById('answerMC22text').value;
                answer1Chb = document.getElementById('answerMC12check');
                answer2Chb = document.getElementById('answerMC22check');
                if (answer1Chb.checked) {
                    corrAnsCheckArray.push(answer1);
                    isChecked = true;
                }
                if (answer2Chb.checked) {
                    corrAnsCheckArray.push(answer2);
                    isChecked = true;
                }
                if (isChecked === true) {
                    answers.push(answer1);
                    answers.push(answer2);
                    correctAnswersArray.push(corrAnsCheckArray);
                }
            }
            else if (numberOfAnswers === 'threeMC') {
                answer1 = document.getElementById('answerMC13text').value;
                answer2 = document.getElementById('answerMC23text').value;
                answer3 = document.getElementById('answerMC33text').value;
                answer1Chb = document.getElementById('answerMC13check');
                answer2Chb = document.getElementById('answerMC23check');
                answer3Chb = document.getElementById('answerMC33check');
                if (answer1Chb.checked) {
                    corrAnsCheckArray.push(answer1);
                    isChecked = true;
                }
                if (answer2Chb.checked) {
                    corrAnsCheckArray.push(answer2);
                    isChecked = true;
                }
                if (answer3Chb.checked) {
                    corrAnsCheckArray.push(answer3);
                    isChecked = true;
                }
                if (isChecked === true) {
                    answers.push(answer1);
                    answers.push(answer2);
                    answers.push(answer3);
                    correctAnswersArray.push(corrAnsCheckArray);
                }
            }
            else if (numberOfAnswers === 'fourMC') {
                answer1 = document.getElementById('answerMC14text').value;
                answer2 = document.getElementById('answerMC24text').value;
                answer3 = document.getElementById('answerMC34text').value;
                answer4 = document.getElementById('answerMC44text').value;
                answer1Chb = document.getElementById('answerMC14check');
                answer2Chb = document.getElementById('answerMC24check');
                answer3Chb = document.getElementById('answerMC34check');
                answer4Chb = document.getElementById('answerMC44check');
                if (answer1Chb.checked) {
                    corrAnsCheckArray.push(answer1);
                    isChecked = true;
                }
                if (answer2Chb.checked) {
                    corrAnsCheckArray.push(answer2);
                    isChecked = true;
                }
                if (answer3Chb.checked) {
                    corrAnsCheckArray.push(answer3);
                    isChecked = true;
                }
                if (answer4Chb.checked) {
                    corrAnsCheckArray.push(answer4);
                    isChecked = true;
                }
                if (isChecked === true) {
                    isChecked = (answer1Chb || answer2Chb || answer3Chb || answer4Chb);
                    answers.push(answer1);
                    answers.push(answer2);
                    answers.push(answer3);
                    answers.push(answer4);
                    correctAnswersArray.push(corrAnsCheckArray);
                }
            }
            else if (numberOfAnswers === 'fiveMC') {
                answer1 = document.getElementById('answerMC15text').value;
                answer2 = document.getElementById('answerMC25text').value;
                answer3 = document.getElementById('answerMC35text').value;
                answer4 = document.getElementById('answerMC45text').value;
                answer5 = document.getElementById('answerMC55text').value;
                answer1Chb = document.getElementById('answerMC15check');
                answer2Chb = document.getElementById('answerMC25check');
                answer3Chb = document.getElementById('answerMC35check');
                answer4Chb = document.getElementById('answerMC45check');
                answer5Chb = document.getElementById('answerMC55check');
                if (answer1Chb.checked) {
                    corrAnsCheckArray.push(answer1);
                    isChecked = true;
                }
                if (answer2Chb.checked) {
                    corrAnsCheckArray.push(answer2);
                    isChecked = true;
                }
                if (answer3Chb.checked) {
                    corrAnsCheckArray.push(answer3);
                    isChecked = true;
                }
                if (answer4Chb.checked) {
                    corrAnsCheckArray.push(answer4);
                    isChecked = true;
                }
                if (answer5Chb.checked) {
                    corrAnsCheckArray.push(answer5);
                    isChecked = true;
                }
                if (isChecked === true) {
                    answers.push(answer1);
                    answers.push(answer2);
                    answers.push(answer3);
                    answers.push(answer4);
                    answers.push(answer5);
                    correctAnswersArray.push(corrAnsCheckArray);
                }
            }
            else if (numberOfAnswers === 'sixMC') {
                answer1 = document.getElementById('answerMC16text').value;
                answer2 = document.getElementById('answerMC26text').value;
                answer3 = document.getElementById('answerMC36text').value;
                answer4 = document.getElementById('answerMC46text').value;
                answer5 = document.getElementById('answerMC56text').value;
                answer6 = document.getElementById('answerMC66text').value;
                answer1Chb = document.getElementById('answerMC16check');
                answer2Chb = document.getElementById('answerMC26check');
                answer3Chb = document.getElementById('answerMC36check');
                answer4Chb = document.getElementById('answerMC46check');
                answer5Chb = document.getElementById('answerMC56check');
                answer6Chb = document.getElementById('answerMC66check');
                if (answer1Chb.checked) {
                    corrAnsCheckArray.push(answer1);
                    isChecked = true;
                }
                if (answer2Chb.checked) {
                    corrAnsCheckArray.push(answer2);
                    isChecked = true;
                }
                if (answer3Chb.checked) {
                    corrAnsCheckArray.push(answer3);
                    isChecked = true;
                }
                if (answer4Chb.checked) {
                    corrAnsCheckArray.push(answer4);
                    isChecked = true;
                }
                if (answer5Chb.checked) {
                    corrAnsCheckArray.push(answer5);
                    isChecked = true;
                }
                if (answer6Chb.checked) {
                    corrAnsCheckArray.push(answer6);
                    isChecked = true;
                }
                if (isChecked === true) {
                    answers.push(answer1);
                    answers.push(answer2);
                    answers.push(answer3);
                    answers.push(answer4);
                    answers.push(answer5);
                    answers.push(answer6);
                    correctAnswersArray.push(corrAnsCheckArray);
                }
            }
        }
        else if (questionType === 'open') {
            autoCorr = 0;
            correctAnswersArray.push("");
        }
        answerNotChecked = ((!isChecked) && (questionType !== 'open'));
        if (answerNotChecked) {
            alert("Ange det rätta svaret på frågan");
        }
        else {
            answerArray.push(answers);
            questionArray.push(questionText);
            imageURLArray.push(imageURL); //TODO bildhantering
            questionTypeArray.push(questionType);
            pointsArray.push(points);

            parsed = JSON.parse(localStorage.getItem(testStorageName));
            parsed.questionString.push(questionArray);
            parsed.questionPicture.push(imageURLArray);
            parsed.answerType.push(questionTypeArray);
            parsed.points.push(pointsArray);
            parsed.answers.push(answerArray);
            parsed.correctAnswers.push(correctAnswersArray);

            answers = [];
            var test = JSON.parse(localStorage.getItem(testStorageName));
            document.getElementById("createQuestionForm").reset();
            $("#singleC").hide();
            $("#multiC").hide();
            $("#open").hide();
            //      document.getElementById("typeId").innerHTML = ''; selectboxar ska nollställas
            document.getElementById("questionId").innerHTML = "Fråga " + ++questionNumber;
            document.getElementById("saveTest").style.visibility = "visible";
        }
    }
}

// TODO saveTest
function saveTest() {
    parsed.testName.push(testNameArray);
    parsed.testTime.push(testTimeArray);
    parsed.gProcent.push(gProcentArray);
    parsed.vgProcent.push(vgProcentArray);

    var temp;
    if (autoCorr == 0) {
        temp = 0;
    }
    else {
        temp = 1;
    }

    parsed.autoCorrect.push(temp);

    var data = JSON.stringify(parsed);
    localStorage.setItem(testStorageName, data);
    userTest = JSON.parse(localStorage.getItem("usertest"));
    userTest.testName.push(testNameArray);
    var emptyArray = [];
    userTest.mail.push(emptyArray);

    var objdata = JSON.stringify(userTest);
    localStorage.setItem("usertest", objdata);

    alert("Testet är sparat");
    location.href = "#framsida";
}

