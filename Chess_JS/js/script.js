function createDesk(desk) {
    let table = document.createElement("table");
    table.id = 'chess'
    let letters = "ABCDEFGH";
    let rowId = 0;
    for (let i = 0; i < desk + 1; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < desk + 1; j++) {
            let td = document.createElement('td');
            td.id = rowId;
            rowId++;
            if (j === 0) {
                td.textContent = desk - i || '';
                td.id = 'num_cell'
                tr.appendChild(td);
                continue;
            }
            if (i === desk) {
                td.textContent = letters.charAt(j - 1);
                td.classList.add('letter');
                tr.appendChild(td);
                continue;
            }
            if (i % 2 == j % 2) {
                td.className = "white";
            } else {
                td.className = "black";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};

function ArrangementFigures() {
    let data_position = [{'name': 'black_rook', 'url': 'img/black_rook.png', 'position': [1, 8]},
        {'name': 'black_horse', 'url': 'img/black_horse.png', 'position': [2, 7]},
        {'name': 'black_elph', 'url': 'img/black_elph.png', 'position': [3, 6]},
        {'name': 'black_quin', 'url': 'img/black_quin.png', 'position': [4]},
        {'name': 'black_king', 'url': 'img/black_king.png', 'position': [5]},
        {'name': 'black_peshka', 'url': 'img/black_peshka.png', 'position': [10, 11, 12, 13, 14, 15, 16, 17]},

        {'name': 'white_rook', 'url': 'img/white_rook.png', 'position': [64, 71]},
        {'name': 'white_horse', 'url': 'img/white_horse.png', 'position': [65, 70]},
        {'name': 'white_elph', 'url': 'img/white_elph.png', 'position': [66, 69]},
        {'name': 'white_quin', 'url': 'img/white_quin.png', 'position': [67]},
        {'name': 'white_king', 'url': 'img/white_king.png', 'position': [68]},
        {'name': 'white_peshka', 'url': 'img/white_peshka.png', 'position': [55, 56, 57, 58, 59, 60, 61, 62]}
    ];

    let fals = document.getElementById('chess');
    for (var vl = 0; vl < 8 * 8; vl++) {
        for (var point = 0; point < data_position[vl].position.length; point++) {
            document.getElementById(data_position[vl].position[point]).innerHTML = '<img src="' + data_position[vl].url + '" alt="">';
        }
    }
};

createDesk(8);
ArrangementFigures();