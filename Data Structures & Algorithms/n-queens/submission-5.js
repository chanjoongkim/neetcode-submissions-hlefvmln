class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let board = Array.from({ length: n }, () => new Array(n).fill('.'));
        // let board = Array.from({ length: n }, () => new Array(columns).fill(defaultValue));

        const result = [];

        const cols = Array.from({ length: n }).fill(false);
        const posDiags = new Set();
        const negDiags = new Set();

        this.backtrack(board, 0, cols, posDiags, negDiags, result);

        return result;
    }

    backtrack(board, r, cols, posDiags, negDiags, result) {
        if (r >= board.length) {
            // add
            const res = [];
            for (const row of board) {
                res.push(row.join(''));
            }
            result.push(res);
            return;
        }

        for (let c = 0; c < board[0].length; c++) {
            if (cols[c]) {
                continue;
            }

            const posDiag = r + c;
            const negDiag = r - c;

            if (posDiags.has(posDiag) || negDiags.has(negDiag)) {
                continue;
            }

            cols[c] = true;
            posDiags.add(posDiag);
            negDiags.add(negDiag);
            board[r][c] = 'Q';
            this.backtrack(board, r + 1, cols, posDiags, negDiags, result);
            cols[c] = false;
            posDiags.delete(posDiag);
            negDiags.delete(negDiag);
            board[r][c] = '.';
        }
    }
}
