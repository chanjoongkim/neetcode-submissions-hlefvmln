class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let result = 0;
        const visited = new Set();

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === '0' || visited.has(r + '-' + c)) {
                    continue;
                }

                // found new land, recursively DFS through it until we finish exploring that island
                // mark visited for each spot we visit
                result++;
                this.dfs(grid, r, c, visited);
            }
        }

        return result;
    }

    dfs(grid, r, c, visited) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || visited.has(r + '-' + c) || grid[r][c] !== '1') {
            return;
        }

        visited.add(r + '-' + c);
        const dr = [1, -1, 0, 0];
        const dc = [0, 0, -1, 1];

        for (let i = 0; i < dr.length; i++) {
            const newR = r + dr[i];
            const newC = c + dc[i];

            this.dfs(grid, newR, newC, visited);
        }
    }
}
