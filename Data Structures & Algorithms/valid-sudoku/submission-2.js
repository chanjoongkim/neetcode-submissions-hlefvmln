class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // check all rows first
        for (let r = 0; r < board.length; r++) {
            if (!this.rowIsValid(board, r)) {
                return false;
            }
        }

        // check all columns
        for (let c = 0; c < board[0].length; c++) {
            if (!this.columnIsValid(board, c)) {
                return false;
            }
        }

        // check squares
        for (let r = 0; r < board.length; r += 3) {
            for (let c = 0; c < board[0].length; c += 3) {
                if (!this.boxIsValid(board, r, c)) {
                    return false;
                }
            }
        }

        return true;
    }

    rowIsValid(board, r) {
        const set = new Set();
        for (let i = 0; i < board.length; i++) {
            const c = board[r][i];
            if (c !== '.') {
                if (set.has(c)) {
                    return false;
                }
                set.add(c);
            }
        }

        return true;
    }

    columnIsValid(board, c) {
        const set = new Set();
        for (let i = 0; i < board[0].length; i++) {
            const ch = board[i][c];
            if (ch !== '.') {
                if (set.has(ch)) {
                    return false;
                }
                set.add(ch);
            }
        }

        return true;
    }

    boxIsValid(board, row, col) {
        const set = new Set();
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                const ch = board[row + r][col + c];
                if (ch !== '.') {
                    if (set.has(ch)) {
                        return false;
                    }
                    set.add(ch);
                }
            }
        }

        return true;
    }
}
