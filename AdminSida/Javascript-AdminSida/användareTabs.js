$('.tab-list').each(function(){
    var $this = $(this);
    var $tab = $this.find('li.active');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));

    $this.on('click', '.tab-control', function(e){
        e.preventDefault();
        var $link = $(this);
        var id = this.hash;

        if (id && !$link.is('.active')){
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active');
        }
    });
});


$(document).ready(function () {

    test = JSON.parse(localStorage.getItem("testdata"));
    var testNameArray = [];

    for(var y = 0; y < test.testName.length;y++){
        testNameArray[y] = test.testName[y];
        //console.log(testNameArray[y]);
    }

    var combo = document.getElementById('selectProv');
    var optionArray = [];

    for(var y = 0; y < test.testName.length;y++) {
        optionArray[y] = document.createElement("option");
        optionArray[y].value = testNameArray[y];
        optionArray[y].innerHTML = testNameArray[y];
        combo.appendChild(optionArray[y]);
    }
})