/**
 * Created by LeoAsp on 2016-04-29.
 */
$(document).ready(function () {

    $("#createClass").click(function () {

        var inputValue = $("#inputClass").val();
        $("#inputClass").val("");
        var classes = JSON.parse(localStorage.getItem("classes"));
        var className = new Array();
        var boolean = true;

        console.log("Create class");
        console.log(classes.className.length);
        for (var i = 0; i < classes.className.length; i++) {
            console.log("Check if exists" + i);
            if (inputValue == classes.className[i]) {
                alert("En klass med det namnet finns redan!");
                boolean = false;
            }
        }
        if (boolean) {
            console.log("Push value");
            className.push(inputValue);
            classes.className.push(className);
            localStorage.setItem("classes", JSON.stringify(classes));
            alert("Du har nu skapat en ny klass med namnet: "+inputValue);
        }
    });

});