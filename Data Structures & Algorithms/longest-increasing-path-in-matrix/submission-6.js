class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        if (!matrix) {
            return 0;
        }

        const memo = {};

        let result = 0;
        const visited = new Set();
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                result = Math.max(result, this.dfs(matrix, r, c, matrix[r][c], visited, memo));
            }
        }

        return result;
    }

    dfs(matrix, r, c, parent, visited, memo) {
        if (r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length) {
            return 0;
        }

        const key = r + '-' + c;
        if (visited.has(key)) {
            return 0;
        }

        if (memo[key]) {
            return memo[key];
        }

        visited.add(key);

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, 1, -1];

        let max = 1;

        for (let i = 0; i < dr.length; i++) {
            const newR = r + dr[i];
            const newC = c + dc[i];

            if (newR >= 0 && newR < matrix.length && newC >= 0 && newC < matrix[0].length && !visited.has(newR + '-' + newC) && matrix[newR][newC] > parent) {
                max = Math.max(max, 1 + this.dfs(matrix, newR, newC, matrix[newR][newC], visited, memo));
            }
        }

        visited.delete(key);

        memo[key] = max;

        return max;
    }
}
