var prime = document.querySelector(".prime__task");
var cart = document.querySelector(".cart__task");
var cycle = document.querySelector(".for__task");
var stringTask = document.querySelector("str__task");


//1
function primeDetect(num) {
    if (num < 2) return false;
    var count = 2;
    while (count < num) {
        if (num % count == 0) {
            return false;
        }
        count++;
    }
    return true;
}

function printNums(num) {
    var i = 0;
    var list = [];

    while (i < num) {
        if (primeDetect(i))
            list.push(i);
        i++;
    }
    console.log(list);
}
prime.addEventListener("click", printNums(100));

//2

function countCartSum(items) {
    var sum = 0;
    for (var i = 0; i < items.length; i++) {
        sum += items[i];
    }
    return sum;
}

var cartArr = [1, 2, 3, 4];


cart.addEventListener("click", function () {
    console.log("Массив с ценами покупок: " + cartArr);
    console.log("Сумма покупок = " + countCartSum(cartArr));
});

//4
cycle.addEventListener("click", event => {
    for (var i = 0; i <= 9; console.log(i++));
});

//5
stringTask.addEventListener("click", function () {
    var str = "";

    for (var i = 0; i < 20; i++) {
        str += "x";
        document.write(str + "<br>");
        console.log(str);
    }
});