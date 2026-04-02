class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        if (!board || !board[0]) {
            return false;
        }

        const size = 9;
        // one pass, have a store of arrays of hashsets
        // one array for row hashsets
        // one array for column hashsets
        // one array for square hashsets

        const rowSets = Array.from({ length: size}, () => new Set());
        const columnSets = Array.from({ length: size}, () => new Set());
        const squareSets = Array.from({ length: size}, () => new Set());

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                const char = board[r][c];

                // check row set first
                const rowSet = rowSets[r];
                if (rowSet.has(char)) {
                    return false;
                }
                if (char !== '.') {
                    rowSet.add(char);
                }

                // check col set now
                const columnSet = columnSets[c];
                if (columnSet.has(char)) {
                    return false;
                }
                if (char !== '.') {
                    columnSet.add(char);
                }

                // use equation: (row / 3) * 3 + (col / 3) to get square index
                // (0 / 3) * 3 + (0 / 3) = 0 (both are in the same upper left square)
                // (0 / 3) * 3 + (1 / 3) = 0
                // (0 / 3) * 3 + (3 /3 ) = 1 (represents the middle upper square)
                const squareIndex = (Math.trunc(r / 3) * 3) + (Math.trunc(c / 3));
                const squareSet = squareSets[squareIndex];
                if (squareSet.has(char)) {
                    return false;
                }
                if (char !== '.') {
                    squareSet.add(char);
                }
            }
        }

        return true;
    }
}
