class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let result = 0;

        const visited = new Set<string>();

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (!visited.has(r + '-' + c) && grid[r][c] === 1) {
                    const currentIsland = this.dfs(grid, r, c, visited);

                    result = Math.max(result, currentIsland);
                }
            }
        }

        return result;
    }

    dfs(grid: number[][], row: number, col: number, visited: Set<string>) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0) {
            return 0;
        }

        const key = row + '-' + col;

        if (visited.has(key)) {
            return 0;
        }

        visited.add(key);

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, -1, 1];

        let result = 1;

        for (let i = 0; i < dr.length; i++) {
            const newR = row + dr[i];
            const newC = col + dc[i];

            if (!visited.has(newR + '-' + newC)) {
                result += this.dfs(grid, newR, newC, visited);
            }
        }

        return result;
    }
}
