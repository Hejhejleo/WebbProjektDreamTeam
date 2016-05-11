/**
 * Created by JRW on 2016-04-28.
 */
var n = 0;

function myFunction() {

    //loading tests from localstorage
    var parsed = JSON.parse(localStorage.getItem('testdata'));
    console.log(parsed.testName[0]);
    //finding the the test that should be answered
    var chosenTest = sessionStorage.getItem('chosenTest');
    var testindex = 0;
    for(var y = 0; y < parsed.testName.length;y++){
        if (chosenTest == parsed.testName[y]){
            console.log("Hittade test id = "+ y);
            testindex = y;
            break;
        }
    }

    var singleChoiceAnswers = document.getElementsByClassName("singleChoiceAnswer").checked;
    console.log(singleChoiceAnswers);
    console.log(parsed.questionString[testindex].length);
    for (var k = 0; k < parsed.questionString[testindex].length; k++) {
        //Creating the button element
        var btn = document.createElement("BUTTON");

        //Giving it a class
        var attbtn = document.createAttribute("class");
        //setting class to accordion
        attbtn.value = "accordion";
        btn.setAttributeNode(attbtn);
        //Creating div that is the pane
        var pane = document.createElement("DIV");
        var attpan = document.createAttribute("class");
        //assingning class
        attpan.value = "panel";
        pane.setAttributeNode(attpan);

        //Handling singlechoice questions
        if (parsed.answerType[testindex][n] == "singleChoice") {

            var form = document.createElement("form");


            //console.log('url= ' + parsed.questionPicture[testindex][1]);
            if(parsed.questionPicture[testindex][n] != null){
                var image = document.createElement('IMG');
                image.setAttribute("src",parsed.questionPicture[testindex][n]);
                form.appendChild(image);

            }


            for (var e = 0; e < parsed.answers[testindex][n].length; e++) {
                var inputform = document.createElement("input");
                var lbl = document.createElement("label");
                inputform.setAttribute("id", parsed.answers[testindex][n][e] + e);
                inputform.setAttribute("class","question : " + n);
                lbl.setAttribute("for", parsed.answers[testindex][n][e] + e);
                inputform.setAttribute("type", "radio");
                //console.log(parsed.answer[n][e]);
                inputform.setAttribute("name", "answer");
                inputform.setAttribute("value", parsed.answers[testindex][n][e]);
                lbl.setAttribute("class", "answers");
                var anstext = document.createTextNode(parsed.answers[testindex][n][e]);
                lbl.appendChild(inputform);
                lbl.appendChild(anstext);
                form.appendChild(lbl);
                pane.appendChild(form);


            }


        }//handling multiple choice questions
        else if (parsed.answerType[testindex][n] == "multiChoice") {
            var chkform = document.createElement("form");

            if(parsed.questionPicture[testindex][n] != null){
                var image = document.createElement('IMG');
                image.setAttribute("src",parsed.questionPicture[testindex][n]);
                chkform.appendChild(image);

            }

            for (var t = 0; t < parsed.answers[testindex][n].length; t++) {
                var inputchk = document.createElement("input");
                inputchk.setAttribute("type", "checkbox");
                inputchk.setAttribute("name", "answer" + t);
                inputchk.setAttribute("value", parsed.answers[testindex][n][t]);
                inputchk.setAttribute("id", parsed.answers[testindex][n][t] + t);
                inputchk.setAttribute("class","question : " + n);
                var lblchk = document.createElement("label");
                lblchk.setAttribute("class", "answers");
                lblchk.setAttribute("for", parsed.answers[testindex][n][t] + t);
                var chktext = document.createTextNode(parsed.answers[testindex][n][t]);
                chkform.appendChild(lblchk);
                lblchk.appendChild(inputchk);
                lblchk.appendChild(chktext);


            }
            pane.appendChild(chkform);
        }//handling open answer questions
        else if (parsed.answerType[testindex][n] == "open") {
            var freeArea = document.createElement("textarea");

            if(parsed.questionPicture[testindex][n] != null){
                var image = document.createElement('IMG');
                image.setAttribute("src",parsed.questionPicture[testindex][n]);
                freeArea.appendChild(image);
                
            }

            freeArea.setAttribute("class", "question : " + n);
            freeArea.setAttribute("cols", "60");
            freeArea.setAttribute("rows", "15");
            pane.appendChild(freeArea);
        }

        //creating main buttons text
        var t = document.createTextNode(parsed.questionString[testindex][n]);
        //console.log(n);
        n++;
        //adding maintext to mainbutton
        btn.appendChild(t);
        //adding main button to the body
        document.body.appendChild(btn);
        document.body.appendChild(pane);
        //hides and shows accordion elements
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function () {

                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }

    }
}