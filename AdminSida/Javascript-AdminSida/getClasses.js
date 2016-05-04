/**
 * Created by LeoAsp on 2016-05-03.
 */
var classes = JSON.parse(localStorage.getItem("classes"));
$(".getClasses").click(function () {
    if (classes == null) {
    } else {
        $(".classList").empty();
        for (var i = 0; i < classes.className.length; i++) {
            $select = $("<option value='" + classes.className[i] + "'>" + classes.className[i] + "</option>")
            $(".classList").append($select);
        }

    }
});

