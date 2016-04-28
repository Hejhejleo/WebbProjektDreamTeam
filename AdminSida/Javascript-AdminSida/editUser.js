$(document).ready(function () {

   var users = JSON.parse(localStorage.getItem("users"));
    for (var i=0;i<users.mail.length;i++){
    if(i % 2 == 0){
        $li = $("<div class='grid-100 handle-item white'><span class='grid-33 handle-span'>"+users.firstName[i]+"</span><span class='grid-33 handle-span'>"+users.lastName[i]+"</span><span class='grid-33 handle-span'>"+users.mail[i]+"</span></div>");
    }else{
        $li = $("<div class='grid-100 handle-item grey'><span class='grid-33 handle-span'>"+users.firstName[i]+"</span><span class='grid-33 handle-span'>"+users.lastName[i]+"</span><span class='grid-33 handle-span'>"+users.mail[i]+"</span></div>");
    }

    $("#handleUl").append($li);

    }

});