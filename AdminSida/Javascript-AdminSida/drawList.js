$("body").on('click',".reload-list",function () {
    var users = JSON.parse(localStorage.getItem("users"));
    var classes = JSON.parse(localStorage.getItem("classes"));
    $("#handleUl").empty();
    $(".handle-item").remove();
    for (var i = 0; i < users.mail.length; i++) {
    var $li="";
        if (i % 2 == 0) {
            $li = $("<li class='grid-100 handle-item grey' id='" + users.mail[i]+"'><div class='grid-25 handle-div'>" + users.firstName[i] + "</div><div class='grid-25 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
        } else {
            $li = $("<li class='grid-100 handle-item white' id='" + users.mail[i]+ "'><div class='grid-25 handle-div'>" + users.firstName[i] + "</div><div class='grid-25 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
        }

        $("#handleUl").append($li);
    }
    if (classes == null) {
    } else {
    $(".classList").empty();
        for (var i = 0; i < classes.className.length; i++) {
            $select = $("<option value='" + classes.className[i] + "'>" + classes.className[i] + "</option>")
            $(".classList").append($select);
        }

    }
});