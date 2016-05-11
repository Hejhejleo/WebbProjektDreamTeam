$(document).ready(function () {

    $("#logout-button").click(function () {
        logout();
    });


});

function logout() {
    sessionStorage.setItem("loggedInAs", "");
    location.href = "../Login.html";
}