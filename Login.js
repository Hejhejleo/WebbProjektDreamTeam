var username="";
var password="";
var users;
var cookie;

$(document).ready(function () {
    users = JSON.parse(localStorage.getItem("users"));
    cookie = document.cookie;

});

function login(username, password) {
    for (var i = 0; i < users.mail.length; i++) {
        if (users.mail[i] == username) {
            if (users.password[i] == password) {
                saveUser(users.mail[i]);
                if ("admin@admin.se"==username) {
                    location.href = "AdminSida/AdminSida.html"
                } else {
                    location.href = "StudentSida/StudentPage.html";
                }

            }
        }
    }
}

$(document).keypress(function (e) {
    if (e.which == 13) {
        username = $("#username").val();
        password = $("#password").val();
        login(username, password);
    }

});

function saveUser(user) {
    document.cookie = user;
}

$(document).ready(function () {
    if (!(cookie == "")) {
        if (cookie == "admin@admin.se") {
            location.href = "AdminSida/AdminSida.html"
        }
    }
        if (!(cookie == "")) {
            location.href = "StudentSida/StudentPage.html";
            alert(cookie);
        }



});