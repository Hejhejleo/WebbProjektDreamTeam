$(document).ready(function () {

    var userindex;
    var users = JSON.parse(localStorage.getItem("users"));
    var classes = JSON.parse(localStorage.getItem("classes"));

    /*$(".reload-list").on('click', function () {
        var users = JSON.parse(localStorage.getItem("users"));
        $("#handleUl").empty();
        $(".handle-item").remove();
        for (var i = 0; i < users.mail.length; i++) {
            if (i % 2 == 0) {
                $li = $("<li class='grid-100 handle-item grey' id='" + users.mail[i] + "'><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-20 handle-div'>" + users.className[i] + "</div><div class='grid-20 handle-div'>" + users.mail[i] + "</div></li>");
            } else {
                $li = $("<li class='grid-100 handle-item white' id='" + users.mail[i] + "'><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-20 handle-div'>" + users.className[i] + "</div><div class='grid-20 handle-div'>" + users.mail[i] + "</div></li>");
            }

            $("#handleUl").append($li);
        }
    });*/

    if (classes == null) {
    } else {
        for (var i = 0; i < classes.className.length; i++) {
            $select = $("<option value='" + classes.className[i] + "'>" + classes.className[i] + "</option>")
            $("#handleKlass").append($select);
        }

    }
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

                var mailA = [$("#handleEmail").val()];
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



