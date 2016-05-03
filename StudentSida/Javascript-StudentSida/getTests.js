$( document ).ready(function () {
    

    var user = sessionStorage.getItem("loggedInAs");
    var tests = JSON.parse(localStorage.getItem("testdata"));
    var userTest = JSON.parse(localStorage.getItem("usertest"));
    var availableTests = new Array();
    var $div;
    var $hr = $("<hr>");


    for(i=0;i<userTest.mail.length;i++){

        if(userTest.mail[i]==user){
            availableTests.push(userTest.testName[i]);
        }
    }

    for(i=0;i<availableTests.length;i++){
        $div = $("<div>", {id: availableTests[i], class: "grid-100 test-div", text:availableTests[i]});
        if(i==0){
            $("#ar3").append($hr);
        }
        $("#ar3").append($div);
        $("#ar3").append($hr);


    }




});