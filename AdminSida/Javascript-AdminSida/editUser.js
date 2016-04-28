$(document).ready(function () {

    var userindex;
    var users = JSON.parse(localStorage.getItem("users"));
    for (var i = 0; i < users.mail.length; i++) {
        if (i % 2 == 0) {
            $li = $("<li class='grid-100 handle-item grey' id='" + users.mail[i] + "'><div class='grid-33 handle-div'>" + users.firstName[i] + "</div><div class='grid-33 handle-div'>" + users.lastName[i] + "</div><div class='grid-33 handle-div'>" + users.mail[i] + "</div></li>");
        } else {
            $li = $("<li class='grid-100 handle-item white' id='" + users.mail[i] + "'><div class='grid-33 handle-div'>" + users.firstName[i] + "</div><div class='grid-33 handle-div'>" + users.lastName[i] + "</div><div class='grid-33 handle-div'>" + users.mail[i] + "</div></li>");
        }

        $("#handleUl").append($li);

    }

    $(".handle-item").click(function () {
        var id = $(this).attr('id');
        for (var i = 0; i < users.mail.length; i++) {
            if (users.mail[i] == id) {
            userindex=i;
                $("#handleFirstname").val(users.firstName[userindex]);
                $("#handleLastname").val(users.lastName[userindex]);
                $("#handleEmail").val(users.mail[userindex]);
                $("#handlePassword").val(users.password[userindex]);
                console.log("transer compete");
            }
        }

    });

});

