class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const result = [0];
        const visited = new Set();

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 0 || visited.has(r + '-' + c)) {
                    continue;
                }

                // found unexplored island, see if it's the largest
                this.dfs(grid, r, c, visited, [0], result);
            }
        }

        return result[0];
    }

    dfs(grid, r, c, visited, curr, result) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || visited.has(r + '-' + c) || grid[r][c] !== 1) {
            return;
        }

        // found new land
        // increment curr and see if its max
        visited.add(r + '-' + c);
        curr[0]++;
        result[0] = Math.max(result[0], curr[0]);

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, 1, -1];

        for (let i = 0; i < dr.length; i++) {
            const newR = r + dr[i];
            const newC = c + dc[i];

            this.dfs(grid, newR, newC, visited, curr, result);
        }
    }
}
