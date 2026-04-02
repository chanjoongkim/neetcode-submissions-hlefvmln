class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const visited = new Set();
        const memo = new Map();
        let result = 0;
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[0].length; c++) {
                visited.add(r + '-' + c);
                result = Math.max(result, this.dfs(matrix, r, c, visited, memo));
                visited.delete(r + '-' + c);
            }
        }

        return result;
    }

    dfs(matrix, r, c, visited, memo) {
        if (!this.boundsCheck(matrix, r, c)) {
            return 0;
        }

        const key = r + '-' + c;
        if (memo.has(key)) {
            return memo.get(key);
        }

        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];
        let result = 0;

        for (let i = 0; i < 4; i++) {
            const newR = r + dr[i];
            const newC = c + dc[i];

            const newKey = newR + '-' + newC;

            if (this.boundsCheck(matrix, newR, newC) && !visited.has(newKey) && matrix[newR][newC] > matrix[r][c]) {
                visited.add(newKey);
                result = Math.max(result, this.dfs(matrix, newR, newC, visited, memo));
                visited.delete(newKey);
            }
        }

        memo.set(key, 1 + result);
        return 1 + result;
    }

    boundsCheck(matrix, r, c) {
        return r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length;
    }
}
