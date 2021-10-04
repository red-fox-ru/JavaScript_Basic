function clickSlider() {
    data_src = ['img/slider/android-android-phone.jpg', 'img/slider/technology-phone.jpg', 'img/slider/smartphone-app.jpg']

    var left = document.getElementById('btn_left');
    var right = document.getElementById('btn_right');
    var slide = document.getElementById('slide'), el = 0;


    right.onclick = function () {
        if (el > data_src.length - 2) {
            el = 0
            slide.src = data_src[el]

        } else {
            el++
            slide.src = data_src[el]
        }
    }

    left.onclick = function () {
        if (el === 0) {
            el = data_src.length - 1
            slide.src = data_src[el]
        } else {
            el--
            slide.src = data_src[el]
        }
    }
}

clickSlider();

function generateId(elemNameId, selectorCss, uniqName) {
    var main = document.getElementById(elemNameId);
    var elments = main.querySelectorAll(selectorCss);
    var num = 1;

    for (let el of elments) {
        el.id = uniqName + num
        num++
    }
}

generateId('description', 'div > article > img', 'el');



function getRaisePic() {
    var img = new Image();
    var raisEl = document.getElementById('description');
    raisEl.onclick = function (event) {
        var name = document.getElementById(event.target.id).getAttribute('src').split('/')[2];
        img.src = 'img/original/' + name.split('.')[0] + '.jpg';
        img.onload = function () {
            document.getElementById('raise').innerHTML = '<img src="img/original/' + name.split('.')[0] + '.jpg"> <img id="close" src="img/icon/close_cross.svg" onclick="closeBigPic()">';
        }
        img.onerror = function () {
            alert('Нет картинки');
        }

    }
}

function closeBigPic() {
    var elements = document.querySelectorAll('#raise > img');
    for (let el of elements){
        el.remove()
    }
}
getRaisePic()

generateId('store', 'article', 'prd')

function listProduct(num) {
    var name, price, count = 0, total, totalSum = 0;
    var getProduct = document.getElementById('prd'+ num);
    getProduct.onclick = function () {
        count++
        getProduct.querySelector('h3 > span').innerHTML = count;

        name = getProduct.querySelector("h1");
        price = getProduct.querySelector("h2");
        price = parseInt(price.textContent.replace(/\D+/g,""));
        total = price*count
        if (count < 2){
        document.getElementById('item_cart').insertAdjacentHTML('beforeEnd',
            '<h3 id="item_id'+num+'"><span >'+ name.textContent + '</span> <span style="margin-left: 40px" id="count_item">' + count + 'шт</span> <span id="total">' + price + ' $</span></h3>'
        )}else {
            document.querySelector('#item_id'+num+' > #count_item').innerHTML = count + 'шт';
            document.querySelector('#item_id'+num+' > #total').innerHTML = total + ' $';
        }

    }

}

var prodOne = listProduct(1);
var prodTwo = listProduct(2);
var prodThree = listProduct(3);
var prodFour = listProduct(4);


function sellProd() {
    var totalSum = 0
    document.getElementById('cart').style.display = 'flex'
    var totals = document.querySelectorAll('#item_cart > h3 > #total');
    for (let el of totals){
        totalSum = totalSum + parseInt(el.textContent.replace(/\D+/g,""));

    }
    document.getElementById('sum').innerHTML = totalSum + ' $'
}

function closeCart() {
    document.getElementById('cart').style.display = "none"
}
























