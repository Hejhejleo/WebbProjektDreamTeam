$(document).ready(function() {
    var localStorageInfo = localStorage.getItem("information");

    if (localStorageInfo == "" || localStorageInfo == null) {
        $("#loginTextarea").val("Det finns ingen information just nu!");
    } else {
        $("#loginTextarea").val(localStorageInfo);
    }
});
