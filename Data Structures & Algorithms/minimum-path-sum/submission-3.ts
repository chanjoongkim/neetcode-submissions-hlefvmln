class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid: number[][]): number {
        const visited = new Set<String>();
        const memo = new Map<String, number>();

        return this.dfs(grid, 0, 0, visited, memo);
    }
    
    dfs(grid: number[][], row: number, col: number, visited: Set<String>, memo: Map<String, number>): number {
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

        visited.add((row + 1) + '-' + col);
        visited.add(row + '-' + (col + 1));

        const result = grid[row][col] + Math.min(this.dfs(grid, row + 1, col, visited, memo), this.dfs(grid, row, col + 1, visited, memo));

        // visited.delete((row + 1) + '-' + col);
        // visited.delete(row + '-' + (col + 1));;

        memo.set(row + '-' + col, result);

        return result;
    }
}
