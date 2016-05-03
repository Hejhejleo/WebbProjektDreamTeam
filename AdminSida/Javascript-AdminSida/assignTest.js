/**
 * Created by LeoAsp on 2016-04-29.
 */

var chosenTest;
var indexChosenTest = 0;
var userTest;
$(document).ready(function () {
    userTest = JSON.parse(localStorage.getItem("usertest"));

    $("#tilldelaSection").on("click", "li.handle-item", function () {
        console.log("Clicked");
        var id = $(this).attr("id");
        console.log(id);
        var checkboxId = id + "checkbox";
        console.log(checkboxId);
        if (document.getElementById(checkboxId).checked) {
            document.getElementById(checkboxId).checked = false;
        } else {
            document.getElementById(checkboxId).checked = true;
        }
    });


});


function drawList() {
    indexChosenTest = null;
    userTest = JSON.parse(localStorage.getItem("usertest"));
    var users = JSON.parse(localStorage.getItem("users"));
    for (var i = 0; i < userTest.testName.length; i++) {
        console.log("Looking for correct Test: " + i);
        if (userTest.testName[i] == chosenTest) {
            console.log("found it on: " + i);
            indexChosenTest = i;
        }
    }
    console.log("Chosen index: " + indexChosenTest);

    $("#studentList").empty();
    for (var i = 0; i < users.mail.length; i++) {
        console.log("Starting on user: " + i);
        var $li = "";
        var checked = false;
        for (var j = 0; j < userTest.mail[indexChosenTest].length; j++) {
            console.log("Cheecking if user has connection");
            console.log(users.mail[i]);
            console.log(userTest.mail[indexChosenTest][j]);
            if ((userTest.mail[indexChosenTest][j]) == (users.mail[i])) {

                console.log("Found!")
                checked = true;
            } else {
                console.log("Not found")
            }
        }
        if (i % 2 == 0) {
            if (checked) {
                $li = $("<li class='grid-100 handle-item gray' id='" + users.mail[i] + "'><div class='grid-10'><input id=" + users.mail[i] + "checkbox type='checkbox' checked></div><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
            } else {
                $li = $("<li class='grid-100 handle-item gray' id='" + users.mail[i] + "'><div class='grid-10'><input id=" + users.mail[i] + "checkbox type='checkbox'></div><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
            }

        } else {
            if (checked) {
                $li = $("<li class='grid-100 handle-item white' id='" + users.mail[i] + "'><div class='grid-10'><input id=" + users.mail[i] + "checkbox type='checkbox' checked></div><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
            } else {
                $li = $("<li class='grid-100 handle-item white' id='" + users.mail[i] + "'><div class='grid-10'><input id=" + users.mail[i] + "checkbox type='checkbox'></div><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
            }
        }

        $("#studentList").append($li);
    }
}

$("#selectProv").change(function () {
    chosenTest = $("#selectProv").val();
    console.log(chosenTest);
    drawList();
});

$(".getClasses").click(function () {
    console.log("GetClasses");
    var testData = JSON.parse(localStorage.getItem("testdata"));
    $("#selectProv").empty();
    console.log(testData.testName[0]);
    for (var i = 0; i < testData.testName.length; i++) {
        var $options = null;
        $options = $("<option> " + testData.testName[i] + "</option>")
        $("#selectProv").append($options)
    }
    console.log($options);


});


function update() {
    userTest = JSON.parse(localStorage.getItem("usertest"));
    

}

