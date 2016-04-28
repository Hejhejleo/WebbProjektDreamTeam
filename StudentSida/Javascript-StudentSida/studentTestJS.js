/**
 * Created by JRW on 2016-04-28.
 */
var n = 0;

function myFunction() {
    var obj = {
        "testName": ['test1'],
        "testTime": [40],
        "questionString": [[["huvudstad?"], ["Städer?"], ["Frukt"], ["Beskriv en dörr"]]],
        "answerType": [[["singleChoice"], ["multiChoice"], ["singleChoice"], ["freeText"]]],
        "points": [[1], [2], [2], [4]],
        "answer": [[["Stockholm", "Göteborg", "Malmö", "Luleå"], ["Göteborg", "Stenköping", "London"], ["Sten", "Apelsin", "Kärra"], []]],
        "correctAnswers": [["Stockholm"], [["Göteborg"], ["London"]], ["Apelsin"], []],
        "gProcent": [60],
        "vgProcent": [80],
        "autoCorrect": [1]
    };
    var obe = JSON.stringify(obj);
    localStorage.setItem('accrd', obe);
    //loading tests from localstorage
    var parsed = JSON.parse(localStorage.getItem('accrd'));


    console.log(parsed.questionString[0].length);
    for (var k = 0; k < parsed.questionString[0].length; k++) {
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
        if (parsed.answerType[0][n] == "singleChoice") {

            var form = document.createElement("form");

            for (var e = 0; e < parsed.answer[0][n].length; e++) {
                var inputform = document.createElement("input");
                var lbl = document.createElement("label");
                inputform.setAttribute("id", parsed.answer[0][n][e] + e);
                lbl.setAttribute("for", parsed.answer[0][n][e] + e);
                inputform.setAttribute("type", "radio");
                //console.log(parsed.answer[n][e]);
                inputform.setAttribute("name", "answer");
                inputform.setAttribute("value", parsed.answer[0][n][e]);
                lbl.setAttribute("class", "answers");
                var anstext = document.createTextNode(parsed.answer[0][n][e]);
                lbl.appendChild(inputform);
                lbl.appendChild(anstext);
                form.appendChild(lbl);

            }
            pane.appendChild(form);

        }//handling multiple choice questions
        else if (parsed.answerType[0][n] == "multiChoice") {
            var chkform = document.createElement("form");

            for (var t = 0; t < parsed.answer[0][n].length; t++) {
                var inputchk = document.createElement("input");
                inputchk.setAttribute("type", "checkbox");
                inputchk.setAttribute("name", "answer" + t);
                inputchk.setAttribute("value", parsed.answer[0][n][t]);
                inputchk.setAttribute("id", parsed.answer[0][n][t] + t);
                var lblchk = document.createElement("label");
                lblchk.setAttribute("class", "answers");
                lblchk.setAttribute("for", parsed.answer[0][n][t] + t);
                var chktext = document.createTextNode(parsed.answer[0][n][t]);
                chkform.appendChild(lblchk);
                lblchk.appendChild(inputchk);
                lblchk.appendChild(chktext);


            }
            pane.appendChild(chkform);
        }//handling open answer questions
        else if (parsed.answerType[0][n] == "freeText") {
            var freeArea = document.createElement("textarea");
            freeArea.setAttribute("class", "freeTexts");
            freeArea.setAttribute("cols", "60");
            freeArea.setAttribute("rows", "15");
            pane.appendChild(freeArea);
        }

        //creating main buttons text
        var t = document.createTextNode(parsed.questionString[0][n]);
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