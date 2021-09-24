var step = 0, correctAns = 0, lsNameButton = ['A: ',  'B: ', 'C: ', 'D: '];

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
    document.getElementById('question_answer').innerHTML = data[step].question;
    for (var qs = 0; qs < 4; qs++){
        document.getElementById('ans_'+qs).innerHTML = lsNameButton[qs] + data[step].answer[qs]
    }
    correctAns = data[step].correct_answer
    console.log(data[step])

}

function clickAnswerA(){
    if (correctAns == 0){
        document.getElementById('step'+step).classList.remove('total');
        step++;
        document.getElementById('step'+step).classList.add('total');
        levelGenerate()
    }else {
        document.getElementById('msg').innerHTML = '<h1>Вы проиграли!</h1> ' +
            '<button id="msg_btn" onclick="location.reload()">ЗАКРЫТЬ</button>';
    }
}

function clickAnswerB(){
    if (correctAns == 1){
        document.getElementById('step'+step).classList.remove('total');
        step++;
        document.getElementById('step'+step).classList.add('total');
        levelGenerate()
    }else {
        document.getElementById('msg').innerHTML = '<h1>Вы проиграли!</h1> ' +
            '<button id="msg_btn" onclick="location.reload()">ЗАКРЫТЬ</button>';
    }
}

function clickAnswerC(){
    if (correctAns == 2){
        document.getElementById('step'+step).classList.remove('total');
        step++;
        document.getElementById('step'+step).classList.add('total');
        levelGenerate()
    }else {
        document.getElementById('msg').innerHTML = '<h1>Вы проиграли!</h1> ' +
                    '<button id="msg_btn" onclick="location.reload()">ЗАКРЫТЬ</button>';
    }
}

function clickAnswerD() {
    if (correctAns == 3){
        document.getElementById('step'+step).classList.remove('total');
        step++;
        document.getElementById('step'+step).classList.add('total');
        levelGenerate()
    }else {
        document.getElementById('msg').innerHTML = '<h1>Вы проиграли!</h1> ' +
            '<button id="msg_btn" onclick="location.reload()">ЗАКРЫТЬ</button>';
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
    questionRead(data)
});

