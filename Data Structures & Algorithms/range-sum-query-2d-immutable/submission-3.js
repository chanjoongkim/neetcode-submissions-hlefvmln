class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.prefixSums = Array.from({ length: matrix.length }, () => Array.from({ length: matrix[0].length }, () => 0));

        let sum = 0;
        for (let c = 0; c < matrix[0].length; c++) {
            sum += matrix[0][c];
            this.prefixSums[0][c] = sum;
        }

        sum = 0;
        for (let r = 0; r < matrix.length; r++) {
            sum += matrix[r][0];
            this.prefixSums[r][0] = sum;
        }
        
        for (let r = 1; r < matrix.length; r++) {
            for (let c = 1; c < matrix[0].length; c++) {
                this.prefixSums[r][c] = matrix[r][c] + this.prefixSums[r - 1][c] + this.prefixSums[r][c - 1] - this.prefixSums[r - 1][c - 1];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let total = this.prefixSums[row2][col2];
        let above = row1 > 0 ? this.prefixSums[row1 - 1][col2] : 0;
        let left = col1 > 0 ? this.prefixSums[row2][col1 - 1] : 0;
        let overlap = (row1 > 0 && col1 > 0) ? this.prefixSums[row1 - 1][col1 - 1] : 0;
        
        return total - above - left + overlap;
    }
}