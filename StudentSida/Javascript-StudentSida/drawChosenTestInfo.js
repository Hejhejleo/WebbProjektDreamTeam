/**
 * Created by LeoAsp on 2016-05-09.
 */
function drawTestInfo() {
    var chosenTest = sessionStorage.getItem("chosenTest");
    var tests = JSON.parse(localStorage.getItem("testdata"));
    var testIndex;

    for (var i = 0; i < tests.testName.length; i++) {
        if (chosenTest == tests.testName[i]) {
            console.log("Hittade test index = " + i);
            testIndex = i;
            break;
        }
    }

    var $testArea = $("<textarea class='testInfo' readonly></textarea>");
    var maxPoints=0;
    for(var i=0; i<tests.points[testIndex].length;i++){
        maxPoints+=tests.points[testIndex][i];
    }

    $testArea.append("Test Namn: "+tests.testName[testIndex]+"\n");
    $testArea.append("Test Tid: "+tests.testTime[testIndex]+"\n");
    $testArea.append("Antal Frågor: "+tests.questionString[testIndex].length+"\n");
    $testArea.append("Max poäng: "+maxPoints+"\n");
    $testArea.append("Procent för G: "+tests.gProcent[testIndex]+"\n");
    $testArea.append("Procent för VG: "+tests.vgProcent[testIndex]+"\n");
    $testArea.append(""+"\n");


    $("#ar3").html($testArea);

}