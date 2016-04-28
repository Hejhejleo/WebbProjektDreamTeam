var username="";
var password="";
var users;
var seesion;
var correctLogin=false;

$(document).ready(function () {
    users = JSON.parse(localStorage.getItem("users"));
    sessionStorage.setItem("loggedInAs","");
    seesion = sessionStorage.getItem("loggedInAs");

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