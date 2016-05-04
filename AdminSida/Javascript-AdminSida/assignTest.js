/**
 * Created by LeoAsp on 2016-04-29.
 */

var chosenTest;
var chosenClass;
var indexChosenTest = 0;
var userTest;
var users;
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
        update();
    });

    $("#tilldelaButton").click(function () {
        classTilldela();
    });

    $("#deleteButton").click(function () {
        classDelete();
    });


});


function drawList() {
    indexChosenTest = null;
    userTest = JSON.parse(localStorage.getItem("usertest"));
    users = JSON.parse(localStorage.getItem("users"));
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

$("#selectKlass").change(function () {
    chosenClass = $("#selectKlass").val();
    console.log(chosenClass);
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
    console.log("Update DATABASE")
    userTest = JSON.parse(localStorage.getItem("usertest"));
    users = JSON.parse(localStorage.getItem("users"));

    userTest.mail[indexChosenTest] = [];

    for (var i = 0; i < users.mail.length; i++) {
        console.log("Checking user: " + i + " - " + users.mail[i]);
        if (document.getElementById(users.mail[i] + "checkbox").checked) {
            console.log(i + " Checked");
            userTest.mail[indexChosenTest].push(users.mail[i].toString());

        } else {
            console.log(i + " Uncheked");
        }
    }
    localStorage.setItem("usertest", JSON.stringify(userTest));
    userTest = JSON.parse(localStorage.getItem("usertest"));


}


function classTilldela() {
    var userArray = new Array;
    for (var i = 0; i < users.mail.length; i++) {
        if (users.className[i] == chosenClass) {
            userArray.push(users.mail[i]);
        }
    }
    for (var i = 0; i < userArray.length; i++) {
        document.getElementById(userArray[i] + "checkbox").checked = true;
    }
    update();

}

function classDelete() {
    var userArray = new Array;
    for (var i = 0; i < users.mail.length; i++) {
        if (users.className[i] == chosenClass) {
            userArray.push(users.mail[i]);
        }
    }

    for (var i = 0; i < userArray.length; i++) {
        document.getElementById(userArray[i] + "checkbox").checked = false;
    }
    update();

}