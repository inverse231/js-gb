var blackCell = document.querySelector('.black');
var whiteCell = document.querySelector('.white');
var board = document.querySelector('.board');

for (var i = 0; i < 64; i++) {
    document.querySelector('.board').appendChild(document.createElement("div")).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'black' : 'white';

}

