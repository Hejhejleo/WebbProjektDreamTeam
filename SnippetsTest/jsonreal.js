/**
 * Created by Reza on 2016-04-28.
 */

var parsed;

var testName ;
var testTime ;
var gPercent ;
var vgPercent ;

var testNameArray = [];
var testTimeArray = [];
var gProcentArray = [];
var vgProcentArray = [];
var questionArray = [];
var answerArray = [];
var pointsArray = [];
var correctAnswersArray = [];
var questionTypeArray = [];

var questionText;
var questionType;
var numberOfAnswers;
var answers = [];
var answer1, answer2, answer3, answer4, answer5, answer6;
var answer1Radio, answer2Radio, answer3Radio, answer4Radio;
var answer1Chb, answer2Chb, answer3Chb, answer4Chb, answer5Chb, answer6Chb ;
var correctAnswer;
var corrAnsCheckArray = [];
var points;

var out = document.getElementById('output');

function saveTestInfo(){

    testName = document.getElementById('testName').value;
    testTime = document.getElementById('testTime').value;
    gPercent = document.getElementById('gPercent').value;
    vgPercent = document.getElementById('vgPercent').value;

    testNameArray.push(testName);
    testTimeArray.push(testTime);
    gProcentArray.push(gPercent);
    vgProcentArray.push(vgPercent);

    parsed = JSON.parse(localStorage.getItem('test2'));

    if(parsed == null) {
        var obj = {
            "testName": [["test1"]],
            "testTime": [[40]],
            "questionString": [[["huvudstad?"], ["Städer?"]]],
            "answerType": [[["singleChoice"], ["multiChoice"]]],
            "points": [[1],[2]],
            "answers": [[["Stockholm", "Göteborg", "Malmö", "Luleå"], ["Göteborg", "Stenköping", "London"]]],
            "correctAnswers": [["Stockholm"],[["Göteborg"],["London"]]],
            "gProcent": [[60]],
            "vgProcent": [[80]],
            "autoCorrect": [[1]]
        }
        var objdata = JSON.stringify(obj);
        localStorage.setItem('test2', objdata);
    }

}

function saveQuestion(){

    questionText = document.getElementById('questionText').value;
    questionType = document.getElementById('typeId').options[document.getElementById('typeId').selectedIndex].value;
    points = document.getElementById('maxPoint').value;


    questionArray.push(questionText);
    questionTypeArray.push(questionType);
    pointsArray.push(points);

    if(questionType === 'singleChoice'){
        numberOfAnswers = document.getElementById('numberOfAnswersSC').value;
        if(numberOfAnswers === 'twoSC'){
            answer1 = document.getElementById('answerSC12text').value;
            answer2 = document.getElementById('answerSC22text').value;
            answer1Radio = document.getElementById('answerSC12radio');
            answer2Radio = document.getElementById('answerSC22radio');
            if(answer1Radio.checked){
                correctAnswer = answer1;
            }
            else if (answer2Radio.checked){
                correctAnswer = answer2;
            }
            answers.push(answer1);
            answers.push(answer2);
            correctAnswersArray.push(correctAnswer);

        }
        else if(numberOfAnswers === 'threeSC'){
            answer1 = document.getElementById('answerSC13text').value;
            answer2 = document.getElementById('answerSC23text').value;
            answer3 = document.getElementById('answerSC33text').value;
            answer1Radio = document.getElementById('answerSC13radio');
            answer2Radio = document.getElementById('answerSC23radio');
            answer3Radio = document.getElementById('answerSC33radio');

            if(answer1Radio.checked){
                correctAnswer = answer1;
            }
            else if (answer2Radio.checked){
                correctAnswer = answer2;
            }
            else if (answer3Radio.checked){
                correctAnswer = answer3;
            }

            answers.push(answer1);
            answers.push(answer2);
            answers.push(answer3);
            correctAnswersArray.push(correctAnswer);

        }
        else if(numberOfAnswers === 'fourSC'){
            answer1 = document.getElementById('answerSC14text').value;
            answer2 = document.getElementById('answerSC24text').value;
            answer3 = document.getElementById('answerSC34text').value;
            answer4 = document.getElementById('answerSC44text').value;
            answer1Radio = document.getElementById('answerSC14radio');
            answer2Radio = document.getElementById('answerSC24radio');
            answer3Radio = document.getElementById('answerSC34radio');
            answer4Radio = document.getElementById('answerSC34radio');

            if(answer1Radio.checked){
                correctAnswer = answer1;
            }
            else if (answer2Radio.checked){
                correctAnswer = answer2;
            }
            else if (answer3Radio.checked){
                correctAnswer = answer3;
            }
            else if (answer4Radio.checked){
                correctAnswer = answer4;
            }
            answers.push(answer1);
            answers.push(answer2);
            answers.push(answer3);
            answers.push(answer4);
            correctAnswersArray.push(correctAnswer);

        }
    }
    else if(questionType === 'multiChoice'){
        numberOfAnswers = document.getElementById('numberOfAnswersMC').value;

        if(numberOfAnswers === 'twoMC'){
            answer1 = document.getElementById('answerMC12text').value;
            answer2 = document.getElementById('answerMC22text').value;
            answer1Chb = document.getElementById('answerMC12check');
            answer2Chb = document.getElementById('answerMC22check');
            if(answer1Chb.checked){
                corrAnsCheckArray.push(answer1);
            }
            if (answer2Chb.checked){
                corrAnsCheckArray.push(answer2);
            }

            answers.push(answer1);
            answers.push(answer2);
            correctAnswersArray.push(corrAnsCheckArray);

        }
        else if(numberOfAnswers === 'threeMC'){
            answer1 = document.getElementById('answerMC13text').value;
            answer2 = document.getElementById('answerMC23text').value;
            answer3 = document.getElementById('answerMC33text').value;
            answer1Chb = document.getElementById('answerMC13check');
            answer2Chb = document.getElementById('answerMC23check');
            answer3Chb = document.getElementById('answerMC33check');
            if(answer1Chb.checked){
                corrAnsCheckArray.push(answer1);
            }
            if (answer2Chb.checked){
                corrAnsCheckArray.push(answer2);
            }
            if (answer3Chb.checked){
                corrAnsCheckArray.push(answer3);
            }

            answers.push(answer1);
            answers.push(answer2);
            answers.push(answer3);
            correctAnswersArray.push(corrAnsCheckArray);

        }
        else if(numberOfAnswers === 'fourMC'){
            answer1 = document.getElementById('answerMC14text').value;
            answer2 = document.getElementById('answerMC24text').value;
            answer3 = document.getElementById('answerMC34text').value;
            answer4 = document.getElementById('answerMC44text').value;
            answer1Chb = document.getElementById('answerMC14check');
            answer2Chb = document.getElementById('answerMC24check');
            answer3Chb = document.getElementById('answerMC34check');
            answer4Chb = document.getElementById('answerMC44check');
            if(answer1Chb.checked){
                corrAnsCheckArray.push(answer1);
            }
            if (answer2Chb.checked){
                corrAnsCheckArray.push(answer2);
            }
            if (answer3Chb.checked){
                corrAnsCheckArray.push(answer3);
            }
            if (answer4Chb.checked){
                corrAnsCheckArray.push(answer4);
            }

            answers.push(answer1);
            answers.push(answer2);
            answers.push(answer3);
            answers.push(answer4);
            correctAnswersArray.push(corrAnsCheckArray);

        }
        else if(numberOfAnswers === 'fiveMC'){
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
            if(answer1Chb.checked){
                corrAnsCheckArray.push(answer1);
            }
            if (answer2Chb.checked){
                corrAnsCheckArray.push(answer2);
            }
            if (answer3Chb.checked){
                corrAnsCheckArray.push(answer3);
            }
            if (answer4Chb.checked){
                corrAnsCheckArray.push(answer4);
            }
            if (answer5Chb.checked){
                corrAnsCheckArray.push(answer5);
            }

            answers.push(answer1);
            answers.push(answer2);
            answers.push(answer3);
            answers.push(answer4);
            answers.push(answer5);
            correctAnswersArray.push(corrAnsCheckArray);

        }
        else if(numberOfAnswers === 'sixMC'){
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
            if(answer1Chb.checked){
                corrAnsCheckArray.push(answer1);
            }
            if (answer2Chb.checked){
                corrAnsCheckArray.push(answer2);
            }
            if (answer3Chb.checked){
                corrAnsCheckArray.push(answer3);
            }
            if (answer4Chb.checked){
                corrAnsCheckArray.push(answer4);
            }
            if (answer5Chb.checked){
                corrAnsCheckArray.push(answer5);
            }
            if (answer6Chb.checked){
                corrAnsCheckArray.push(answer6);
            }

            answers.push(answer1);
            answers.push(answer2);
            answers.push(answer3);
            answers.push(answer4);
            answers.push(answer5);
            answers.push(answer6);
            correctAnswersArray.push(corrAnsCheckArray);

        }


    }

    answerArray.push(answers);

    /*
     parsed = JSON.parse(localStorage.getItem('test2'));

     parsed.testName.push(testNameArray);
     parsed.testTime.push(testTimeArray);
     parsed.questionString.push(questionArray);
     parsed.answerType.push(questionTypeArray);
     parsed.points.push(pointsArray);
     parsed.answers.push(answerArray);
     parsed.correctAnswers.push(correctAnswersArray);
     parsed.gProcent.push(gProcentArray);
     parsed.vgProcent.push(vgProcentArray);

     var data = JSON.stringify(parsed);
     localStorage.setItem('test2', data);
     */

    var test = JSON.parse(localStorage.getItem('test2'));

    /*
     out.innerHTML = 'Questiontext: ' + questionText + '<br/>' + 'Questiontype: ' + questionType +  '<br/>'
     + 'antal svar: ' + numberOfAnswers + '<br/>' + 'svar1: ' + answer1 + '<br/>'
     + 'svar2: ' + answer2 + '<br/>' + 'svar3: ' + answer3 + '<br/>'
     + 'svar4: ' + answer4 + '<br/>' + 'rätt svar: ' + corrAnsCheckArray[0] + '<br/>'
     + 'rätt svar: ' + corrAnsCheckArray[1] + '<br/>';
     */

    out.innerHTML = test.correctAnswers[1];



}

function saveTest() {

}