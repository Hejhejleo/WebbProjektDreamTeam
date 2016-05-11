/**
 * Created by LeoAsp on 2016-05-11.
 */
$(document).ready(function () {
    var fbChosenTest = "";
    var fbChosenStudent = "";


    drawStudentList();

    function drawStudentList() {
        var users = JSON.parse(localStorage.getItem("users"));
        $("#studentNav").empty();
        for (var i = 0; i < users.mail.length; i++) {
            var $li = "";
            if (i % 2 == 0) {
                $li = $("<div class='grid-100 student gray' id='" + users.mail[i] + "'><div class='grid-33'>" + users.firstName[i] + "</div><div class='grid-33'>" + users.lastName[i] + "</div><div class='grid-33'>" + users.mail[i] + "</div></div>");
            } else {
                $li = $("<div class='grid-100 student white' id='" + users.mail[i] + "'><div class='grid-33'>" + users.firstName[i] + "</div><div class='grid-33'>" + users.lastName[i] + "</div><div class='grid-33'>" + users.mail[i] + "</div></div>");
            }
            $("#studentNav").append($li);
        }
    }

    $("#studentNav").on("click", ".student", function () {
        fbChosenStudent = $(this).attr('id');
        console.log("Clicked: " + fbChosenStudent);
        drawTestList();

    });

    function drawTestList() {
        console.log("Draw test list");
        var savedTests = JSON.parse(localStorage.getItem("savedtest"));
        var availableTests = new Array();
        var $div;

        for (var i = 0; i < savedTests.testName.length; i++) {
            console.log("for loop " + i);
            if (savedTests.studentmail[i] == fbChosenStudent) {
            console.log("found test for chosen student");
                if (savedTests.autoCorrect[i] == 0) {
                console.log("found test not auto");
                    availableTests.push(i);
                    console.log("Test #: " + i + " " + savedTests.testName[i]);
                }
            }

        }

        for (var i = 0; i < availableTests.length; i++) {
            $div = $("<div class='inlineDiv'><div class='grid-15 listStyle'><i class='fa fa-file fa-2x' aria-hidden='" + true + "'></i></div><div class='grid-100 test' id='" + availableTests[i] + "'>" + savedTests.testName[availableTests[i]] + "</div></div>");
            $("#testNav").append($div);
        }

    }

    $("#testNav").on("click", ".test", function () {
        fbChosenTest = $(this).attr('id');
        drawStudentAnswers();

    });

    function drawStudentAnswers() {


    }


    function emptyContent() {

    }

});