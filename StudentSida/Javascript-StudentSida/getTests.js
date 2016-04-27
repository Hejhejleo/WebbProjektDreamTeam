$( document ).ready(function () {

    var user = document.cookie;
    var tests = JSON.parse(localStorage.getItem("tests"));
    var userTest = JSON.parse(localStorage.getItem("usertests"));
    var availableTests = new Array();
    var $div;
    var $hr = $("<hr>");


    for(i=0;i<userTest.mail.length;i++){

    if(userTest.mail[i]==user){
    availableTests =(userTest.testName[i]);
    }
    }
    $div = $("<div>", {id: availableTests[i], class: "grid-100 test-div"});
    for(i=0;i<availableTests.length;i++){
        if(i==0){
            $("#ar3").append($hr);
        }
        $("#ar3").append($div);
        $("#ar3").append($hr);


    }




});