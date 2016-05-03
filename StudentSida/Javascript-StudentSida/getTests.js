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
            $("#ar3").append($("<hr>"));
        }
        $div = $("<div id='" + availableTests[i] + "' class='grid-100 test-div'>"+availableTests[i]+"</div>");
        $("#ar3").append($div);
        $("#ar3").append($("<hr>"));


    }


});