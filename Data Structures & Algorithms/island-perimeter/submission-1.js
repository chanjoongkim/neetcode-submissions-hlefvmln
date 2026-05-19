class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const visited = new Set();
        const result = [0];

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 1) {
                    this.dfs(grid, r, c, visited, result);
                    break;
                }
            }
        }

        return result[0];
    }

    dfs(grid, r, c, visited, result) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) {
            return;
        }

        const key = r + '-' + c;

        if (visited.has(key)) {
            return;
        }

        visited.add(r + '-' + c);

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, -1, 1];

        for (let i = 0; i < dr.length; i++) {
            const newR = r + dr[i];
            const newC = c + dc[i];

            // boundary check of newR/newC
            // and check if new spot is water
            if (newR < 0 || newR >= grid.length || newC < 0 || newC >= grid[0].length || grid[newR][newC] === 0) {
                result[0]++;
            }
            // we must have hit new land we haven't explored yet
            else if (!visited.has(newR + '-' + newC)) {
                this.dfs(grid, newR, newC, visited, result);
            }
        }
    }
}
