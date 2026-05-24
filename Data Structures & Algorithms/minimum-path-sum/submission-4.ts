class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid: number[][]): number {
        // memo acts as our "visited"
        const memo = new Map<String, number>();

        return this.dfs(grid, 0, 0, memo);
    }
    
    dfs(grid: number[][], row: number, col: number, memo: Map<String, number>): number {
        // boundary check
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
            return Number.MAX_SAFE_INTEGER;
        }

        // base case we reached the bottom right
        if (row === grid.length - 1 && col === grid[0].length - 1) {
            return grid[row][col];
        }

        if (memo.has(row + '-' + col)) {
            return memo.get(row + '-' + col);
        }

        const result = grid[row][col] + Math.min(this.dfs(grid, row + 1, col, memo), this.dfs(grid, row, col + 1, memo));

        memo.set(row + '-' + col, result);

        return result;
    }
}
