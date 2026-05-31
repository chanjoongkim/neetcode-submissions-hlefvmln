class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let result = 0;

        const visited = new Set<string>();

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === '1' && !visited.has(r + '-' + c)) {
                    result++;
                    this.dfs(grid, r, c, visited);
                }
            }
        }

        return result;
    }

    // using DFS, we explicitly mark any land we have visited so we don't re-visit land
    dfs(grid: string[][], row: number, col: number, visited: Set<string>) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
            return;
        }

        const key = row + '-' + col;

        if (visited.has(key)) {
            return;
        }

        visited.add(key);

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, -1, 1];

        for (let i = 0; i < dr.length; i++) {
            const newR = row + dr[i];
            const newC = col + dc[i];

            if (!visited.has(newR + '-' + newC)) {
                this.dfs(grid, newR, newC, visited);
            }
        }
    }
}
