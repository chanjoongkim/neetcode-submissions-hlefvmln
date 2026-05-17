class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    totalNQueens(n) {
        // don't actually need a whole board
        // const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));

        // just keep track of the cols that we have filled
        const cols = new Array(n).fill(false);
        const posDiags = new Set();
        const negDiags = new Set();

        const result = [0];
        this.backtrack(n, 0, cols, posDiags, negDiags, result);

        return result[0];
    }

    backtrack(n, r, cols, posDiags, negDiags, result) {
        if (r >= n) {
            result[0]++;
            return;
        }

        // for our current row, we need to try to place a queen that hasn't already been placed in a prior column
        // and also is not in a positive or negative diagonal of another queen
        for (let c = 0; c < cols.length; c++) {
            if (cols[c]) {
                continue;
            }

            const pDiag = r + c;
            const nDiag = r - c;

            if (posDiags.has(pDiag) || negDiags.has(nDiag)) {
                continue;
            }

            // we found an eligible spot
            cols[c] = true;
            posDiags.add(pDiag);
            negDiags.add(nDiag);
            this.backtrack(n, r + 1, cols, posDiags, negDiags, result);
            posDiags.delete(pDiag);
            negDiags.delete(nDiag);
            cols[c] = false;
        }
    }
}
