let que = document.querySelector('.que');
let answers = document.querySelectorAll('.answer');
let points = document.querySelector('.points');
let state = 1;
points.innerText = 0;
points.style = "display:block;"

class Level {
  constructor(question, answer1, answer2, answer3, answer4, correctAnswer) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
  }
}
let level1 = new Level('Сколько цветов в радуге?', 3, 5, 7, 10, 7);
fillContent(level1);
let level2 = new Level('Кто убил Пушкина?', 'Лермонтов', 'Маяковский', 'Беляев', 'Дантес', 'Дантес');
let level3 = new Level('Назовите корень числа 1369', 27, 13, 35, 37, 37);

function fillContent(object) {
  if (object == null) {
    document.body.style = "display:none";
  } else {
    que.innerHTML = object.question;
    answers[0].innerHTML = object.answer1;
    answers[1].innerHTML = object.answer2;
    answers[2].innerHTML = object.answer3;
    answers[3].innerHTML = object.answer4;
    for (var i = 0; i < answers.length; i++) {
      answers[i].onclick = showAnswer;
    }
  }
}

function showAnswer(eventObj) {
  var answer = eventObj.target;
  console.log(answer);

  if (answer.innerText == level1.correctAnswer) {
    points.innerHTML = 100;
    fillContent(level2);
  } else if (answer.innerText == level2.correctAnswer) {
    points.innerHTML = 200;
    fillContent(level3);
  } else if (answer.innerText == level3.correctAnswer) {
    points.innerHTML = 300;
    alert("Вы выиграли");
  }
}