class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = new Set();

        let result = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === '0' || visited.has(r + '-' + c)) {
                    continue;
                }

                console.log(r, c);

                result++;

                this.dfs(grid, r, c, visited);
            }
        }

        return result;
    }

    dfs(grid, r, c, visited) {
        visited.add(r + '-' + c);

        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];

        for (let i = 0; i < 4; i++) {
            const newR = r + dr[i];
            const newC = c + dc[i];

            if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.has(newR + '-' + newC) && grid[newR][newC] === '1') {
                this.dfs(grid, newR, newC, visited);
            }
        }
    }
}
