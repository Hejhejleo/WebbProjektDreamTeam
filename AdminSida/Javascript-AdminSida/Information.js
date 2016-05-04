$(document).ready(function(){
var localStorageInfo =localStorage.getItem("information");

    if(localStorageInfo=="" ||localStorageInfo== null){
        $("#info").val("Denna ruta är till för att skicka information till informationsrutan på login-sidan. Ska användas för att ge studenter information om tillgängliga prov samt annan information." +
           "\n\n" + "Ta bort denna text när du ska skriva in ny.");
    }else{
        $("#info").val(localStorageInfo);
    }

    $("#framButton").click(function(){
        localStorage.setItem("information",$("#info").val());
    });
});


