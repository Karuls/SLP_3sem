class Sudoku {
    constructor() {
        this.resetBoard();
    }

    resetBoard() {
        this.board = Array.from({ length: 9 }, () => Array(9).fill(0));
    }

    checkLine(row) { //Проверяет, содержит ли строка с номером row только уникальные числа
        let set = new Set();
        for (let i of this.board[row]) {
            if (i !== 0 && set.has(i)) {
                return false;
            }
            set.add(i);
        }
        return true;
    }

    checkColumn(column) {
        let set = new Set();
        for (let i = 0; i < 9; i++) {
            let num = this.board[i][column];
            if (num !== 0 && set.has(num)) {
                return false;
            }
            set.add(num);
        }
        return true;
    }

    checkSquare(row, col) { // 3x3 (row, col)только уникальные числа
        let set = new Set();
        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let num = this.board[startRow + i][startCol + j];
                if (num !== 0 && set.has(num)) {
                    return false;
                }
                set.add(num);
            }
        }
        return true;
    }

    checkBoard() { // проверить всю доску Судоку на корректность
        let hasErrors = false; // (повторы чисел)
        const boardElement = document.getElementById('sudokuBoard'); // контейнер, в котором расположены все ячейки доски
        for (let cell of boardElement.children) { // Сброс визуальных стилей
            cell.classList.remove('highlight');
            cell.classList.remove('valid');
        }

        for (let i = 0; i < 9; i++) { // пр строк и колонок
            if (!this.checkLine(i)) {
                for (let col = 0; col < 9; col++) {
                    boardElement.children[i * 9 + col].classList.add('highlight');
                }
                hasErrors = true;
            }
            if (!this.checkColumn(i)) {
                for (let row = 0; row < 9; row++) {
                    boardElement.children[row * 9 + i].classList.add('highlight');  //i * 9 + col: Вычисл индекс эл в массиве доч эл
                }
                hasErrors = true;
            }
        }
        for (let i = 0; i < 9; i += 3) { // 3x3
            for (let j = 0; j < 9; j += 3) {
                if (!this.checkSquare(i, j)) {
                    for (let row = 0; row < 3; row++) { // Подсветка ошибок в квадрате
                        for (let col = 0; col < 3; col++) {
                            boardElement.children[(i + row) * 9 + (j + col)].classList.add('highlight');
                        }
                    }
                    hasErrors = true;
                }
            }
        }
        if (!hasErrors) { // Финальная проверка
            for (let cell of boardElement.children) {
                cell.classList.add('valid');
            }
        }
    }

    fillBoard(row, col) { // рекурсивный алгоритм "обратного отслеживания"
        if (row === 9) return true; // пределы
        if (col === 9) return this.fillBoard(row + 1, 0);

        if (this.board[row][col] !== 0) { // перепрыг.
            return this.fillBoard(row, col + 1);
        }

        const numbers = this.shuffle(Array.from({ length: 9 }, (v, k) => k + 1)); // ген случ поряд чисел
        for (let num of numbers) { // попытка заполнить клетку
            if (this.isValid(row, col, num)) {
                this.board[row][col] = num;
                if (this.fillBoard(row, col + 1)) return true; // Пытаемся заполнить следующую клетку в строке
                this.board[row][col] = 0;
            }
        }
        return false;
    }

    shuffle(array) { // перемешивание
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // обмен местами
        }
        return array;
    }

    isValid(row, col, num) { // 
        for (let i = 0; i < 9; i++) {
            if (this.board[row][i] === num || this.board[i][col] === num) {
                return false;
            }
        }
        const startRow = Math.floor(row / 3) * 3; // Находит номер 3x3 блока по вертикали
        const startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[startRow + i][startCol + j] === num) {
                    return false;
                }
            }
        }
        return true;
    }

    renderBoard() { // бновляет Судоку в польз интерфейсе
        const boardElement = document.getElementById('sudokuBoard'); // получение эл доски
        boardElement.innerHTML = ''; // очитска
        for (let row = 0; row < 9; row++) { // создание клеток
            for (let col = 0; col < 9; col++) {
                const cell = document.createElement('input');
                cell.type = 'text';
                cell.maxLength = 1;
                cell.classList.add('cell'); // чтобы применить стили оформления
                cell.value = this.board[row][col] !== 0 ? this.board[row][col] : ''; // число/ ничего
                cell.oninput = (e) => {
                    const value = parseInt(e.target.value, 10); // преобр
                    this.board[row][col] = isNaN(value) ? 0 : value; //  число? нет - ничкго
                };
                boardElement.appendChild(cell); // сохр
            }
        }
    }
}

const sudoku = new Sudoku();

function generateNewBoard() {
    sudoku.resetBoard();
    sudoku.renderBoard();
}

function checkBoard() {
    sudoku.checkBoard();
}

function generateCompleteBoard() {
    sudoku.fillBoard(0, 0);
    sudoku.renderBoard();
}

window.onload = () => {
    sudoku.renderBoard();
};
