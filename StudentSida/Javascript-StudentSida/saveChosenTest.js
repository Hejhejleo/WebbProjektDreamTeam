/**
 * Created by LeoAsp on 2016-05-08.
 */
$(document).ready(function () {

    sessionStorage.removeItem("chosenTest");

    $("body").on("click", ".test-div", function () {
        $(".test-div").css("transform", "scale(1)");
        $(".test-div").css("background-color", "lightgray");
        var id = $(this).attr('id');
        console.log("Chosen test: " + id);
        sessionStorage.setItem("chosenTest", id);
        $(this).css("background-color", "gray");
        $(this).css("transform", "scale(.98)");

    });


    $("body").on("click","#choose-test",function () {
        if (sessionStorage.getItem("chosenTest") == null || sessionStorage.getItem("chosenTest") == "") {
            alert("Ett test måste väljas!");
        } else {
            console.log("Valt testet: " + sessionStorage.getItem("chosenTest"));
            drawTestInfo();
            $("#choose-test").val("Starta Provet")
            $("#choose-test").attr("id","start-test");
        }
    });

    //Här ska koden för länkningen till göra provet som student stoppas in så man blir länkad till sidan där man gör provet.
    $("body").on("click","#start-test",function () {

        console.log("Starta testet: "+sessionStorage.getItem("chosenTest"));

    });


});