function createChessBoard() {
    var table = document.createElement("table");
    table.className = 'board';
    var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
        numerals = ['', 1, 2, 3, 4, 5, 6, 7, 8, ''];
    var figsLetters = ['', 'Л', 'К', 'С', 'Кр', 'Ф', 'С', 'К', 'Л', ''];
    var figsLetters2 = ['', 'П', 'П', 'П', 'П', 'П', 'П', 'П', 'П', ''];
    console.log(figsLetters);    
        for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (var j = 0; j < 10; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
            if (i % 2 == j % 2 || i == 0 || i > 8 || j > 8 || j == 0) {
                td.className = "tan";
            }
            else {
                td.className = "white";
            }
            switch(i) {
                case 0: 
                    td.innerText = letters[j];
                    tr.style.transform = 'rotate(180deg)';
                    break;
                case 1:
                    td.innerText = figsLetters[j];
                    break;
                case 2:
                    td.innerText = figsLetters2[j];
                    break;
                case 7: 
                    td.innerText = figsLetters2[j];
                    break;
                case 8: 
                    td.innerText = figsLetters[j];
                    break;
                case 9:
                    td.innerText = letters[j];
                    break;
            }
            switch(j) {
                case 0: 
                    td.innerText = numerals[i];
                    break;
                case 9:
                    td.innerText = numerals[i];
                    td.style.transform = 'rotate(180deg)';
                    break;
            }
        }
    }
    document.body.appendChild(table);
}
createChessBoard();