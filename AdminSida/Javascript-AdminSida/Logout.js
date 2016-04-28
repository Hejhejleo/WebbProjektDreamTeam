$(document).ready(function () {
   
   $("#logout-button").click(function () {
       sessionStorage.setItem("loggedInAs","")
       location.href="../Login.html";
   });
   
    
});