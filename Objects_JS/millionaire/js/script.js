var step = 0, correctAns = 0, lsNameButton = ['A: ',  'B: ', 'C: ', 'D: '], lsId = [];

// этот метод работает только на сервере, на локальном в частности
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
             callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
    }


function questionRead(data) {
    let lsRandLvl = [];
    let stepQs = step+1
    for (let el = 0; el < lsId.length; el++){
        if (lsId[el].toString().length === 4 && stepQs.toString().length === 1) {
            if (lsId[el].toString().indexOf(stepQs) === 0) {
                console.log(lsId[el])
                lsRandLvl.push(lsId.indexOf(lsId[el]))
            }
        }
        else if (lsId[el].toString().length === 5 && stepQs.toString().length === 2){
            if (lsId[el].toString().indexOf(stepQs) === 0){
                console.log(lsId[el])
                lsRandLvl.push(lsId.indexOf(lsId[el]))
            }
        }
    }
    let numRand = lsRandLvl[Math.floor(Math.random() * lsRandLvl.length)]
    document.getElementById('question_answer').innerHTML = data[numRand].question;
    for (var qs = 0; qs < 4; qs++){
        document.getElementById('ans_'+qs).innerHTML = lsNameButton[qs] + data[numRand].answer[qs]
    }
    correctAns = data[numRand].correct_answer
    lsRandLvl.length = 0
}

function viewAns(){
    let button = document.getElementById('ans_'+correctAns)
    button.style.fontWeight = "bold";
    button.style.boxShadow  = "2px 2px 10px 0 rgba(112,54,190, 0.7) inset, 0px 5px 10px 0 rgba(63,81,181, 0.8)";
    button.style.color = "#2addd8";
}

function loseAns() {
    document.getElementById('msg').style.display = 'flex';
    document.getElementById('msg').innerHTML = '<h1>Вы проиграли!</h1> ' +
        '<button id="msg_btn" onclick="location.reload()">ЗАКРЫТЬ</button>';
}

function clickAnswerA(){
    if (correctAns == 0){
        document.getElementById('step'+step).classList.remove('total');
        step++;
        document.getElementById('step'+step).classList.add('total');
        levelGenerate()
    }else {
        setTimeout(viewAns, 500);
        setTimeout(loseAns, 3000);
    }
}

function clickAnswerB(){
    if (correctAns == 1){
        document.getElementById('step'+step).classList.remove('total');
        step++;
        document.getElementById('step'+step).classList.add('total');
        levelGenerate()
    }else {
        setTimeout(viewAns, 500);
        setTimeout(loseAns, 3000);
    }
}

function clickAnswerC(){
    if (correctAns == 2){
        document.getElementById('step'+step).classList.remove('total');
        step++;
        document.getElementById('step'+step).classList.add('total');
        levelGenerate()
    }else {
        setTimeout(viewAns, 500);
        setTimeout(loseAns, 3000);
    }
}

function clickAnswerD() {
    if (correctAns == 3){
        document.getElementById('step'+step).classList.remove('total');
        step++;
        document.getElementById('step'+step).classList.add('total');
        levelGenerate()
    }else {
        setTimeout(viewAns, 500);
        setTimeout(loseAns, 3000);
    }
}

function levelGenerate() {
    readTextFile("js/questions.json", function(text){
        var data = JSON.parse(text);
        questionRead(data)
    });
}

// id в json нужен для реализации рандомных вопросов: [1, 10] - 1 уровень, [11 - 20] - 2 уровень и т.д.


readTextFile("js/questions.json", function(text){
    var data = JSON.parse(text);
    for (let elData = 0; elData < data.length; elData++) {
        lsId.push(data[elData].id)
    }
    questionRead(data)
});

