class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = new Map();

        return this.dfs(m, n, 0, 0, memo);
    }

    dfs(m, n, r, c, memo) {
        if (r < 0 || r >= m || c < 0 || c >= n) {
            return 0;
        }

        if (m - 1 === r && n - 1 === c) {
            return 1;
        }

        const key = r + '-' + c;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let result = 0;

        const dr = [1, 0];
        const dc = [0, 1];

        for (let i = 0; i < dr.length; i++) {
            const newR = r + dr[i];
            const newC = c + dc[i];

            result += this.dfs(m, n, newR, newC, memo);
        }

        memo.set(key, result);
        return result;
    }
}
