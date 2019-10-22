var thirdTask = document.querySelector(".if__task");
var fourthTask = document.querySelector(".rand__task");
var fifthTask = document.querySelector(".func__task");
var sixsthTask = document.querySelector(".mathfunc__task");
var seventhTask = document.querySelector(".null__task");
var eighthTask = document.querySelector(".recursive__task");

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function mathOperation(a, b, operation) {
    switch (operation) {
        case 1:
            return add(a, b);
        case 2:
            return minus(a, b);
        case 3:
            return multiply(a, b);
        case 4:
            return divide(a, b);
        default:
            return "operation type error";
    }
}

function power(value, pow) {
    if (pow === 0)
        return 1;
    else if (pow === 1)
        return value;
    else {
        return value * power(value, pow - 1);
    }
}

thirdTask.addEventListener("click", function () {
    var a = +prompt("Enter a:");
    var b = +prompt("Enter b:");
    var result = 0;

    if (a >= 0 && b >= 0) {
        result = a - b;
    } else if (a < 0 && b < 0) {
        result = a * b;
    } else {
        result = a + b;
    }
    alert("Result = " + result);
});

fourthTask.addEventListener("click", function () {
    var a = parseInt(Math.random() * 15);
    alert(a);
    switch (a) {
        case 0:
            console.log(0);
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        case 3:
            console.log(3);
        case 4:
            console.log(4);
        case 5:
            console.log(5);
        case 6:
            console.log(6);
        case 7:
            console.log(7);
        case 8:
            console.log(8);
        case 9:
            console.log(9);
        case 10:
            console.log(10);
        case 11:
            console.log(11);
        case 12:
            console.log(12);
        case 13:
            console.log(13);
        case 14:
            console.log(14);
        case 15:
            console.log(15);

    }

});

fifthTask.addEventListener("click", function () {
    console.log("all arithmetic operations:");
    console.log(add(2, 3));
    console.log(minus(2, 3));
    console.log(multiply(2, 3));
    console.log(divide(2, 3));
});

sixsthTask.addEventListener("click", function () {
    var a = +prompt("Enter a:");
    var b = +prompt("Enter b:");
    var operation = +prompt("Enter type of operation (1-add,2-minus,3-multiply,4-divide):");

    console.log(mathOperation(a, b, operation));
});

seventhTask.addEventListener("click", function () {
    console.log(0 == null);
    console.log(0 === null);
});

eighthTask.addEventListener("click", function () {
    var value = +prompt("Enter value:");
    var pow = +prompt("Enter power:");
    var result = power(value,pow);
    console.log(result);
});