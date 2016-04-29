var username="";
var password="";
var users;
var test;
var seesion;
var correctLogin=false;

$(document).ready(function () {
    users = JSON.parse(localStorage.getItem("users"));
    test = JSON.parse(localStorage.getItem("testdata"));
    sessionStorage.setItem("loggedInAs","");
    seesion = sessionStorage.getItem("loggedInAs");
    
    if(users == null){
        var admin = {
            "firstName": [["admin"]],
            "lastName": [["admin"]],
            "className": [[""]],
            "mail": [["admin@admin.se"]],
            "password": [["password"]]
        };
        localStorage.setItem("users",JSON.stringify(admin));
        users = JSON.parse(localStorage.getItem("users"));
    }

    if(test == null) {
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
        localStorage.setItem("testdata", objdata);
    }

});

function login(username, password) {

    for (var i = 0; i < users.mail.length; i++) {
        if (users.mail[i] == username) {
            if (users.password[i] == password) {
                correctLogin=true;
                saveUser(users.mail[i]);
                if (username=="admin@admin.se") {
                    location.href = "AdminSida/AdminSida.html"
                } else {
                    location.href = "StudentSida/StudentBeforeTest.html";
                }

            }
        }
    }
}

$(document).keypress(function (e) {
    if (e.which == 13) {
        users = JSON.parse(localStorage.getItem("users"));
        username = $("#username").val();
        password = $("#password").val();
        $("#password").val("")
        login(username, password);
        if(!correctLogin){
            alert("Wrong email/password");
        }
    }

});

function saveUser(user) {
    sessionStorage.setItem("loggedInAs",user);
}

$(document).ready(function () {
    if (!(seesion == "")) {
        if (seesion == "admin@admin.se") {
            location.href = "AdminSida/AdminSida.html"
        }
    }
        if (!(seesion == "")) {
            location.href = "StudentSida/StudentPage.html";
            alert(seesion);
        }



});