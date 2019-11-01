function createChessBoard() {
    var table = document.createElement("table");
    table.className = 'board';
    var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
        numerals = ['', 1, 2, 3, 4, 5, 6, 7, 8, ''],
        blackFigs1 = ['', '\u265C', '\u265E', '\u265D', '\u265B', '\u265A', '\u265D', '\u265E', '\u265C', ''],
        whiteFigs1 = ['', '\u2656', '\u2658', '\u2657', '\u2655', '\u2654', '\u2657', '\u2658', '\u2656', ''],
        blackFigs2 = ['', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F', '\u265F', ''],
        whiteFigs2 = ['', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659', '\u2659', ''];
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
                    td.innerText = blackFigs1[j];
                    break;
                case 2:
                    td.innerText = blackFigs2[j];
                    break;
                case 7: 
                    td.innerText = whiteFigs2[j];
                    break;
                case 8: 
                    td.innerText = whiteFigs1[j];
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