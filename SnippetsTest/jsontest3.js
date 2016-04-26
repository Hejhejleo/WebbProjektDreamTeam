/**
 * Created by Reza on 2016-04-26.
 */




function saveJson() {

    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var out = document.getElementById('output');


    var obj = {
        "testID":[1],
        "questionString":[[["huvudstad?"],["Städer?"]]],
        "answerType":[[["singleChoice"],["multiChoice"]]],
        "answer": [[["Stockholm","Göteborg","Malmö","Luleå"],["Göteborg","Lindköping","London"]]]
    }
    /*
     var obj = {
     "testID":[],
     "questionString":[],
     "answerType":[],
     "answer": [[],[]]
     }*/
    var objdata = JSON.stringify(obj);
    localStorage.setItem('test', objdata);

    var parsed = JSON.parse(localStorage.getItem('test'));

    /*
     if(parsed != null) {
     for (i = 0; i < parsed.length; i++) {
     getarr.push(parsed[i]);
     }
     }
     */

    var testid = 2;
    var questionArray = [["Högsta berg?"],["Sjöar?"]];
    var answerTypeArray = [['singleChoice'],['multiChoice']];
    var answerArray = [['k2','k3','everest'],['vänern','vättern','kebne kajse']]


    parsed.testID.push(testid);
    parsed.questionString.push(questionArray);
    parsed.answerType.push(answerTypeArray);
    parsed.answer.push(answerArray);


    var data = JSON.stringify(parsed);
    localStorage.setItem('test', data);

    var test = JSON.parse(localStorage.getItem('test'));
    out.innerHTML = '';
    /*
     for(i = 0 ; i < obj2.testID.length ; i++) {
     out.innerHTML +=  obj2.testID[i] + obj2.questionString[i][0] + '\n';
     console.log('for loop ' + i);
     }
     */
    for(i=0;i<test.testID.length;i++){
        out.innerHTML += " Test: "+test.testID[i];
        for(j=0;j<test.questionString[i].length;j++){
            out.innerHTML += " Fråga: " + test.questionString[i][j];
            out.innerHTML += " Frågetyp: "+test.answerType[i][j];
            out.innerHTML += " svarsalternativ: "+test.answer[i][j];
            out.innerHTML += '<br/>';
        }

    }


    //console.log(getarr.length);

}
