class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const grid = Array.from({ length: n}, () => 1);
        // space optimized
        for (let r = m - 2; r >= 0; r--) {
            for (let c = n - 2; c >= 0; c--) {
                const downPaths = grid[c]; // take the "down" value from the row below if it existed
                const rightPaths = grid[c + 1]; // take the "right" value from the spot to the right of current

                grid[c] = downPaths + rightPaths
            }
        }

        return grid[0];
    }
}
