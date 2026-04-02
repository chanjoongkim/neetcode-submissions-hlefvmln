class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const grid = Array.from({ length: m}, () => Array.from(n).fill(0));

        grid[m - 1][n - 1] = 1;
        for (let r = m - 1; r >= 0; r--) {
            for (let c = n - 1; c >= 0; c--) {
                if (r == m - 1 && c == n - 1) {
                    continue;
                }

                const downPaths = r + 1 >= m ? 0 : grid[r + 1][c];
                const rightPaths = c + 1 >= n ? 0 : grid[r][c + 1];

                grid[r][c] = downPaths + rightPaths;
            }
        }

        return grid[0][0];
    }
}
