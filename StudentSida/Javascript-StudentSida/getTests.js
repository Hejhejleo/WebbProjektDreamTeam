$(document).ready(function () {


    var user = sessionStorage.getItem("loggedInAs");
    var userTest = JSON.parse(localStorage.getItem("usertest"));
    var availableTests = new Array();
    var $div;

    for (var i = 0; i < userTest.testName.length; i++) {
        for (var j = 0; j < userTest.mail[i].length; j++) {
            if (userTest.mail[i][j] == user) {
                availableTests.push(userTest.testName[i]);
            }
        }

    }

    for (var i = 0; i < availableTests.length; i++) {
        if (i == 0) {

        }
        $div = $("<div class='inlineDiv'><div class='grid-15 listStyle'><i class='fa fa-file fa-2x' aria-hidden='"+true+"'></i></div><div class='grid-100 getTestDiv test-div' id='" + availableTests[i] + "'>"+availableTests[i]+"</div></div>");
        $("#ar3").append($div);



    }


});