var username;
var password;

$(document).ready(function () {

    var users = JSON.parse(localStorage.getItem("users"));

    $(document).keypress(function (e) {
        if (e.which == 13) {
            username = $("#username").val();
            password = $("#password").val();
            login(username, password);
        }

    });

    function login(username, password) {
        for (var i = 0; i < users.mail.length(); i++) {
            if (users.mail[i] == username) {
                if (users.password[i] == password) {
                    saveUser(user);
                }
            }
        }
    }

    function saveUser(user) {
        document.cookie = user;
    }
});