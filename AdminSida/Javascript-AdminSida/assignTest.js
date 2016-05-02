/**
 * Created by LeoAsp on 2016-04-29.
 */
$(document).ready(function () {
    drawList();

    $("#handleUl").on("click","li.handle-item",function () {
        var id = this.attr("id");
        var $checkboxId =$(id);
        if($checkboxId.val()==true){
            document.getElementById(id).checked = false;
        }

        if($checkboxId.val()==false){
            document.getElementById(id).checked = true;
        }
    });



});


 function drawList() {
    var users = JSON.parse(localStorage.getItem("users"));

    
    $("#studentList").empty();
    for (var i = 0; i < users.mail.length; i++) {
        var $li="";
        if (i % 2 == 0) {
            $li = $("<li class='grid-100 handle-item gray' id='" + users.mail[i]+"'><div class='grid-10'><input id="+users.mail[i]+"'checkbox' type='checkbox'></div><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
        } else {
            $li = $("<li class='grid-100 handle-item white' id='" + users.mail[i]+ "'><div class='grid-10'><input id="+users.mail[i]+"'checkbox' type='checkbox'></div><div class='grid-20 handle-div'>" + users.firstName[i] + "</div><div class='grid-20 handle-div'>" + users.lastName[i] + "</div><div class='grid-25 handle-div'>" + users.className[i] + "</div><div class='grid-25 handle-div'>" + users.mail[i] + "</div></li>");
        }

        $("#studentList").append($li);
    }
}