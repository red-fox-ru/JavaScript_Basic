// Вывести все простые числа в промежутке от 0 до 100
function PrimeNum(num) {
    var array = [], limit = Math.sqrt(num), result = '';

    for (var arr = 2; arr < num; arr++) {
        array.push(true);
    }

    for (var el = 2; el <= limit; el++) {
        if (array[el]) {
            for (var mult = el * el; mult < num; mult += el) {
                array[mult] = false;
            }
        }
    }

    for (var prime = 2; prime < num; prime++) {
        if (array[prime]) {
            result += prime + ', ';
        }
    }

    var task1 = document.getElementById('prime_num');
    task1.textContent = 'Простые числа: ' + result;
}

//Функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров
function BasketProduct(products) {
    var sum_basket = 0, name = '';

    products.forEach(function(item){
        sum_basket += item['price'];
        name += item['name'] + ' - <b>' + item['price'] + " ₽ </b><br/>"
    });
    var el_prod = document.getElementById('item_prod');
    el_prod.innerHTML = name;

    var prod_sum = document.getElementById('prod_sum');
    prod_sum.innerHTML = 'Итого: ' + sum_basket + ' ₽'
}

// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(products) {
    var sum_basket = 0;

    products.forEach(function (item) {
        sum_basket += item['price'];
    });
    return sum_basket;
}


//Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
for (let el = 0; el < 10; console.log(el++)) {}


// Нарисовать пирамиду с помощью console.log, должно быть 20 рядов
let row = 'x';
for (let x = 0; x < 20; x++){
    console.log(row);
    row += 'x';
}


// main
PrimeNum(100);


let goods = [
    {
        name: "Материнская плата Esonic G31CEL2",
        price: 2900
    },
    {
        name: "Процессор AMD A8-9600 OEM",
        price: 6500
    },
    {
        name: "Оперативная память Kingston ValueRAM 2Гб",
        price: 1500
    },
    {
        name: "Блок питания Aerocool VX PLUS 350W",
        price: 1499
    }
];

BasketProduct(goods);