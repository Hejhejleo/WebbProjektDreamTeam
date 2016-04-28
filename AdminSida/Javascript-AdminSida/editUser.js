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
    /*for (var i=0;i<classes.length();i++){
    $select=$("<option value='"+classes[i]+"'>"+classes[i]+"</option>")
    }
    $("#handleKlass").append($select);*/

    $(".handle-item").click(function () {
        var id = $(this).attr('id');
        for (var i = 0; i < users.mail.length; i++) {
            if (users.mail[i] == id) {
            userindex=i;
                $("#handleFirstname").val(users.firstName[userindex]);
                $("#handleLastname").val(users.lastName[userindex]);
                $("#handleEmail").val(users.mail[userindex]);
                $("#handlePassword").val(users.password[userindex]);
                $("#handleKlass").val(users.className[userindex]);
                console.log("transer compete");
            }
        }

    });
        $("#handleButton").click(function () {
            if ( $("#handleEmail").val().indexOf('@') != -1) {
                if ($("#handleEmail").val().indexOf('.') != -1) {

                    users.firstName[userindex]=$("#handleFirstname").val();
                    console.log($("#handleFirstname").val());
                    users.lastName[userindex]=$("#handleLastname").val();
                    console.log($("#handleLastname").val());
                    users.mail[userindex]=$("#handleEmail").val();
                    console.log($("#handleEmail").val());
                    users.password[userindex]=$("#handlePassword").val();
                    console.log($("#handlePassword").val());
                    users.className[userindex]=$("#handleKlass").val();
                    console.log($("#handleKlass").val());

                    localStorage.setItem("users",JSON.stringify(users));

                }else {
                    alert("A valid emails need a '.'");
                }
            }else{
            alert("A valid emails need a '@'");
            }

    });

});



