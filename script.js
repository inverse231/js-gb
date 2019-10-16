var firstTask = document.querySelector(".first__task");
var secondTask = document.querySelector(".second__task");
var thirdTask = document.querySelector(".third__task");
var fourthTask = document.querySelector(".fourth__task");

firstTask.addEventListener('click', function () {
    var tempCelsius = prompt("Enter temperature in Celsius");
    var tempFahrenheit = (9 / 5) * tempCelsius + 32;
    alert("Temp in Fahrenheit = " + parseInt(tempFahrenheit));
});

secondTask.addEventListener('click', function () {
    var admin;
    var name = "Василий";

    admin = name;
    alert(admin);
});

thirdTask.addEventListener('click', function () {
    var x = 5;
    var y = 10;

    alert('Before swap:\nx = ' +x +'\ny = ' +y);

    x = x + y;
    y = x - y;
    x = x - y;

    alert('After swap:\nx = ' +x +'\ny = ' +y);
});

fourthTask.addEventListener('click', function () {
    alert("Так как параметры - число и строка, то оператор + будет работать в качестве оператора конкатенации.\n" +1000 + "108");
});