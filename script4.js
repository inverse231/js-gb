var objTask = document.querySelector('.obj__task');

function numToObj(num) {
    var regex = /\d+/g;
    if (!num.toString().match(regex)) {
        console.log("Ошибка ввода, введите только цифры");
        return null;
    }
    var objectNum = {};
    var numArr = num.toString().split('');
    if (numArr.length > 3) {
        console.log("Число больше 999");
        return null;
    }
    switch (numArr.length) {
        case 1:
            objectNum["units"] = numArr[0];
            break;
        case 2:
            objectNum["units"] = numArr[1];
            objectNum["tens"] = numArr[0];
            break;
        case 3:
            objectNum["units"] = numArr[2];
            objectNum["tens"] = numArr[1];
            objectNum["hundreds"] = numArr[0];
            break;
    }
    return objectNum;
}

objTask.addEventListener('click', function () {
    var userNum = +prompt("Введите число от 0 до 999");

    console.log(numToObj(userNum));
});