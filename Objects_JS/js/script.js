// Функция, преобразующая число в объект.
// Передавая на вход число от 0 до 999, на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдается соответствующее сообщение и вернуть пустой объект.
function countNumsPlate() {
    var num = document.getElementById("number").value, lsPlate = ['единицы', 'десятки', 'сотни'], output = {}, result = '';
    if (num >= 0 && num <= 999) {
        var inxType = 0;
        for (var el = num.length-1; el >= 0; el--) {
            result += '<p>' + lsPlate[inxType] + ': ' + num[el] + '</p>';
            output[lsPlate[inxType]] = num[el];
            inxType++;
        }
        document.getElementById("total_item").innerHTML = result
    }
    else {
        document.getElementById("total_item").innerHTML = '<p>ERROR: Введите корректное значение (от 0 до 999) </p>'
    }
    console.log(output);
}