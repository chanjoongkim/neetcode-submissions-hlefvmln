class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid: number[][]): number {
        const visited = new Set<String>();
        const memo = new Map();

        return this.dfs(grid, 0, 0, visited, memo);
    }

    dfs(grid: number[][], row: number, col: number, visited: Set<String>, memo: Map<String, number>): number {
        console.log(row, col);
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 1) {
            return 0;
        }
        if ((row === grid.length - 1) && (col === grid[0].length - 1) && grid[row][col] === 0) {
            return 1;
        }
        const key = row + '-' + col;

        if (memo.has(key)) {
            return memo.get(key);
        }

        const dr = [1, 0];
        const dc = [0, 1];

        let result = 0;

        for (let i = 0; i < dr.length; i++) {
            const newR = row + dr[i];
            const newC = col + dc[i];

            if (!visited.has(newR + '-' + newC)) {
                visited.add(newR + '-' + newC);
                result += this.dfs(grid, newR, newC, visited, memo);
                visited.delete(newR + '-' + newC);
            }
        }

        memo.set(key, result);

        return result;
    }
}
