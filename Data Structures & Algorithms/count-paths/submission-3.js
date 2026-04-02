class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const grid = Array.from({ length: n}, () => 1);

        for (let r = m - 2; r >= 0; r--) {
            for (let c = n - 2; c >= 0; c--) {
                const downPaths = grid[c];
                const rightPaths = grid[c + 1];

                grid[c] = downPaths + rightPaths
            }
        }

        return grid[0];
    }
}
