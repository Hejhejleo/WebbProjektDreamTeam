
function removeConnection(currentUserMail, currentTestName) {
    var users = JSON.parse(localStorage.getItem("users"));
    var userTest = JSON.parse(localStorage.getItem("userTest"));

    var currentTestIndex;

    for (var i = 0; i < userTest.testName.length; i++) {
        if (userTest.testName == currentTestName) {
            currentTestIndex = i;
            for (var j = 0; j < userTest.mail[currentTestIndex].length; j++) {
                if (currentUserMail == userTest.mail[currentTestIndex][j]) {
                    userTest.mail[i].splice(j, 1);

                }
            }
        }
    }
}