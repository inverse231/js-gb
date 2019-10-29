var questionsArray = [];
var answersArray = [];
var gameEnd = false;

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if ((event < 1 || event > q) && event != -1) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

function dialogueWindowAction(question, num, answer1, answer2) {
    var finalAnswer;
    do {
        ok = false;
        event = +prompt(question + answer1 + answer2 + '-1 - Выход из игры');
        ok = isAnswer(num, event);
        finalAnswer = event;
    } while (!ok);
    return finalAnswer;
}

function showDialogueWindow(action) {
    switch (action) {
        case 1:
            return dialogueWindowAction(works.a00, works.a0, works.a1, works.a2);
        case 2:
            return dialogueWindowAction(works.b00, works.b0, works.b1, works.b2);
        case 3:
            return dialogueWindowAction(works.c00, works.c0, works.c1, works.c2);
        case 4:
            return dialogueWindowAction(works.d00, works.d0, works.d1, works.d2);
        default:
            alert("Ошибка");
    }
}

function writeToArrays(question, answer) {
    questionsArray.push(question);
    answersArray.push(answer);
}

do {
    var state = 0;
    state = showDialogueWindow(1);
    writeToArrays(works.a00, state);
    switch (state) {
        case 1:
            state = showDialogueWindow(2);
            writeToArrays(works.b00, state);
            switch (state) {
                case 1:
                case 2:
                    state = showDialogueWindow(4);
                    writeToArrays(works.d00, state);
                    gameEnd = true;
                    break;
            }
            break;
        case 2:
            state = showDialogueWindow(3);
            writeToArrays(works.c00, state);
            switch (state) {
                case 1:
                case 2:
                    state = showDialogueWindow(4);
                    writeToArrays(works.d00, state);
                    gameEnd = true;
                    break;
            }
            break;
        case -1:
            gameEnd = true;
            break;
    }
}
while (gameEnd != true);
alert("Спасибо за игру");

function getNthStep(num) {
    var obj = new Object();
    obj.question = questionsArray[num];
    obj.answer = answersArray[num];
    return obj;
}

var flag = true;
do {
    var query = (+prompt("Введите номер хода\n" + "0 - выход\n" + "Количество ходов:" + answersArray.length)) - 1;
    if ((query < 0 || query > 2) && query != -1) {
        alert("Ошибка ввода");
    } else if (query == -1) {
        flag = false;
    } else {
        var object = getNthStep(query);
        alert(object.question + object.answer);
    }
}
while (flag != false);