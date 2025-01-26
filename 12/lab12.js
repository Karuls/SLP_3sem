class Sudoku {
    constructor() {
        this.resetBoard();
    }

    resetBoard() {
        this.board = Array.from({ length: 9 }, () => Array(9).fill(0));
    }

    checkLine(row) {
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

    checkSquare(row, col) {
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

    checkBoard() {
        let flag = false;
        for (let i = 0; i < 9 && !flag; i++) {
            if (!this.checkLine(i)) {
                console.log(`Ошибка в строке ${i + 1}`);
                flag = true;
            }
            if (!this.checkColumn(i)) {
                console.log(`Ошибка в колонке ${i + 1}`);
                flag = true;
            }
        }
        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                if (!this.checkSquare(i, j)) {
                    console.log(`Ошибка в квадрате (${i + 1}, ${j + 1})`);
                    flag = true;
                }
            }
        }
        if (!flag) {
            console.log("Ошибок нет");
        }
    }

    getNum(row, col, num) {
        if (isNaN(row) || row < 1 || row > 9 || 
            isNaN(col) || col < 1 || col > 9 || 
            isNaN(num) || num < 1 || num > 9) 
        {
            console.log("Некорректный ввод");
        }
        else {
            this.board[row - 1][col - 1] = num;
            console.log(`Число ${num} введено в строку ${row} и колонку ${col}`);
        }
    }

    printBoard() {
        for (let i = 0; i < 9; i++) {
            let row = this.board[i].map(num => num.toString().padStart(2, ' ')).join(' ');
            console.log(row);
        }
    }

    // Метод для генерации правильного игрового поля судоку с учетом пользовательского ввода
    fillBoard(row, col) {
        if (row === 9) return true;
        if (col === 9) return this.fillBoard(row + 1, 0);

        if (this.board[row][col] !== 0) {
            return this.fillBoard(row, col + 1);
        }

        const numbers = this.shuffle(Array.from({ length: 9 }, (v, k) => k + 1));
        for (let num of numbers) {
            if (this.isValid(row, col, num)) {
                this.board[row][col] = num;
                if (this.fillBoard(row, col + 1)) return true;
                this.board[row][col] = 0;
            }
        }
        return false;
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    isValid(row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (this.board[row][i] === num || this.board[i][col] === num) {
                return false;
            }
        }
        const startRow = Math.floor(row / 3) * 3;
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
}

// Пример использования
let sudoku = new Sudoku();

// Пользователь вводит числа в игровое поле
sudoku.getNum(1, 1, 5);
sudoku.getNum(4, 2, 7);
sudoku.getNum(3, 5, 9);

// Генерация остальной части игрового поля
sudoku.fillBoard(0, 0);
sudoku.printBoard();
sudoku.checkBoard();
