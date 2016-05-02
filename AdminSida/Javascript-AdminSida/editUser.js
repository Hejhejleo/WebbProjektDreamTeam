$(document).ready(function () {

    var userindex;
    var users = JSON.parse(localStorage.getItem("users"));

    $("#handleUl").on("click", "li.handle-item", function () {
        var id = $(this).attr('id');
        for (var i = 0; i < users.mail.length; i++) {
            console.log("for");
            if (users.mail[i] == id) {
                userindex = i;
                $("#handleFirstname").val(users.firstName[userindex]);
                console.log($("#handleFirstname").val());
                $("#handleLastname").val(users.lastName[userindex]);
                $("#handleEmail").val(users.mail[userindex]);
                $("#handlePassword").val(users.password[userindex]);
                $("#handleKlass").val(users.className[userindex]);
                console.log("transer compete");
            }
        }

    });
    $("#handleButton").click(function () {
        if ($("#handleEmail").val().indexOf('@') != -1) {
            if ($("#handleEmail").val().indexOf('.') != -1) {
                var FNameA = [$("#handleFirstname").val()];
                users.firstName[userindex] = FNameA;
                console.log($("#handleFirstname").val());

                var LNameA = [$("#handleLastname").val()];
                users.lastName[userindex] = LNameA;
                console.log($("#handleLastname").val());

                var mailA = [$("#handleEmail").val().toLowerCase()];
                users.mail[userindex] = mailA;
                console.log($("#handleEmail").val());

                var passwordA = [$("#handlePassword").val()];
                users.password[userindex] = passwordA;
                console.log($("#handlePassword").val());

                var classnameA = [$("#handleKlass").val()];
                users.className[userindex] = classnameA;
                console.log($("#handleKlass").val());

                localStorage.setItem("users", JSON.stringify(users));

            } else {
                alert("A valid emails need a '.'");
            }
        } else {
            alert("A valid emails need a '@'");
        }

    });

});



