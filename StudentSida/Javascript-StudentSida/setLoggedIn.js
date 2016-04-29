$(document).ready(function () {
    var cMail = sessionStorage.getItem("loggedInAs");
    var users = JSON.parse(localStorage.getItem("users"));

    for(var i=0;i<users.mail.length;i++){
    if(users.mail[i]==cMail){
    console.log("correct mail");
        $("#student-name").html(users.firstName[i]+" "+users.lastName[i]);
        break;
    }else{
        $("#student-name").html("Hacker");
    }
    }

});