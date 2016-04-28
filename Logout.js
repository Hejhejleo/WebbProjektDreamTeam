$(document).ready(function () {
   
   $("#logout-button").click(function () {
       document.cookie = "0; expires=Thu, 01 Jan 1970 00:00:00 UTC path";
       location.href="Login.html";
   });
   
    
});