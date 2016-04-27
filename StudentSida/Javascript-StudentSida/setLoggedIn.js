$(document).ready(function () {
    var cMail = document.cookie;
    var users = JSON.parse(localStorage.getItem("users"));
    for(var i=0;i<users.mail.length;i++){
    if(users.mail[i]==cMail){
        document.getElementById("student-name").innerHTML=users.firstName[i]+" "+users.lastName[i];
    }else{
        document.getElementById("student-name").innerHTML="Hacker";
    }
    }

});