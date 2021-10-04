var number = []; // четыре цифры нашего числа
var attempts = 0; // число попыток

generateNumber(); //debug
function countStep() {
	var step = attempts+1
	document.getElementById('count_step').innerHTML ='Ход №' + step
}
function generateNumber(){
	document.getElementById('btn_start').innerHTML = 'Рестарт';
	var min = 1;
	var max = 9;
	
	// заполняем массив цифр в числе
	for(var i = 0; i < 4; i++){
		var part = Math.round(Math.random() * (max - min)+min); //
		
		// первое число всегда уникально
		if(i == 0){
			number[0] = part;
		}
		else{ // пока не сгенерируется уникальное число, генерируем новые случайные числа
			while(number.indexOf(part) != -1){//элемент найден
				part = Math.round(Math.random() * (max - min) + min);
			}
			
			number[i] = part;
		}
	}
}

function guessNumber(){
	var result = document.getElementById("inp_game").value;
	var gameIsRunning = true;//проверка на то, что игра идет
	if(parseInt(result) == 0 || isNaN(parseInt(result))){
			document.getElementById("res_game").innerHTML = '<p>Вы не ввели число!</p>'
		}
	else if(result.length != 4){
		document.getElementById("res_game").innerHTML = '<p>Не корректное число!</p>'
        }
	else{
		var answer = checkNumber(result);
		if(answer[0]==true){
				document.getElementById("res_game").innerHTML = '<p>Поздравляем! Вы угадали число. Кол-во попыток: ' + attempts + '</p>'
		}
		else{
				document.getElementById("res_game").innerHTML = '<p> Быки: '+answer[1]+', Коровы: '+answer[2]+'</p>'
			}
		}
}

function checkNumber(myresult){//1234
    
    
    //"1234".split('') => [1234]
    
    
	// каждая проверка увеличивает кол-во попыток на 1
	attempts++;
	
	// массив результата
	// 0 - общий результат
	// 1 - быки
	// 2 - коровы
	var answer = [false, 0, 0];
	
	// раскладываем число на разряды
	console.log(myresult);
	console.log(number);
	
	/*s = "1,2,3,4";
	mas = s.split(",")
	*/
	
	
	//var ranks = myresult.split("");//массив, полученный из введенного числа
	

    
	for(var i = 0; i < myresult.length; i++){		//1234
		// если по индексу значения совпадают, то это бык
		if(parseInt(myresult[i]) == number[i]){
			answer[1]++;
		}
		// если число вообще есть в массиве, то это корова
		else if(number.indexOf(parseInt(myresult[i])) != -1){
			answer[2]++;
		}
	}
	
	// если набралось 4 быка, то это победа
	if(answer[1] == 4){
		answer[0] = true;
	}
	
	return answer;
}