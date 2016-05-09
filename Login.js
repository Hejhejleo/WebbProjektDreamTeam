var username = "";
var password = "";
var users;
var test;
var seesion;
var correctLogin = false;

$(document).ready(function () {
    users = JSON.parse(localStorage.getItem("users"));
    test = JSON.parse(localStorage.getItem("testdata"));
    sessionStorage.setItem("loggedInAs", "");
    seesion = sessionStorage.getItem("loggedInAs");

    if (users == null) {
        var admin = {
            "firstName": [["admin"]],
            "lastName": [["admin"]],
            "className": [["Ingen klass"]],
            "mail": [["admin@admin.se"]],
            "password": [["password"]]
        };
        localStorage.setItem("users", JSON.stringify(admin));
        users = JSON.parse(localStorage.getItem("users"));
    }

    if (test == null) {
        var obj = {
            "testName": [["test1"]],
            "testTime": [[40]],
            "questionString": [[["huvudstad?"], ["Städer?"]]],
            "answerType": [["singleChoice", "multiChoice"]],
            "points": [[1,2]],
            "answers": [[["Stockholm", "Göteborg", "Malmö", "Luleå"], ["Göteborg", "Stenköping", "London"]]],
            "correctAnswers": [[["Stockholm"], ["Göteborg", "London"]]],
            "gProcent": [[60]],
            "vgProcent": [[80]],
            "autoCorrect": [[1]]
        }
        var objdata = JSON.stringify(obj);
        localStorage.setItem("testdata", objdata);
    }

    userTest = JSON.parse(localStorage.getItem("usertest"));

    if (userTest == null) {
        var ut = {
            "testName": [["test1"]],
            "mail": [["r@r.com", "leoasp96@gmail.com"]]
        };
        var objdata = JSON.stringify(ut);
        localStorage.setItem("usertest", objdata);
    }

    classes = JSON.parse(localStorage.getItem("classes"));

    if (classes == null) {
        var cl = {
            "className": [["Ingen klass"]]

        };
        var objdata = JSON.stringify(cl);
        localStorage.setItem("classes", objdata);
    }


    $("#login-button").on("click",function () {
        startLogin();
    });

    $(document).keypress(function (e) {
        if (e.which == 13) {
            startLogin();
        }
    });


});

function login(username, password) {

    for (var i = 0; i < users.mail.length; i++) {
        if (users.mail[i] == username) {
            if (users.password[i] == password) {
                correctLogin = true;
                saveUser(users.mail[i]);
                if (username == "admin@admin.se") {
                    location.href = "AdminSida/AdminSida.html"
                } else {
                    location.href = "StudentSida/StudentLoginPage.html";
                }

            }
        }
    }
}


function saveUser(user) {
    sessionStorage.setItem("loggedInAs", user);
}

$(document).ready(function () {
    if (!(seesion == "")) {
        if (seesion == "admin@admin.se") {
            location.href = "AdminSida/AdminSida.html"
        }
    }
    if (!(seesion == "")) {
        location.href = "StudentSida/StudentLoginPage.html";
        alert(seesion);
    }

});

function startLogin() {
    users = JSON.parse(localStorage.getItem("users"));
    username = $("#username").val().toLowerCase();
    password = $("#password").val();
    $("#password").val("")
    login(username, password);
    if (!correctLogin) {
        alert("Wrong email/password");
    }
}