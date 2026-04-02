class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const visited = new Set();
        let maxArea = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                const key = r + '-' + c;

                if (visited.has(key)) {
                    continue;
                }

                visited.add(key);

                if (grid[r][c] === 0) {
                    continue;
                }

                const islandArea = this.bfs(grid, visited, r, c);
                maxArea = Math.max(maxArea, islandArea);
            }
        }

        return maxArea;
    }

    bfs(grid, visited, r, c) {
        const queue = new Queue();
        queue.enqueue([r, c]);
        let area = 0;

        visited.add(r + '-' + c);

        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];

        while (!queue.isEmpty()) {
            const spot = queue.dequeue();
            area++;

            for (let i = 0; i < 4; i++) {
                const newR = spot[0] + dr[i];
                const newC = spot[1] + dc[i];

                if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.has(newR + '-' + newC) && grid[newR][newC] === 1) {
                    visited.add(newR + '-' + newC);
                    queue.enqueue([newR, newC]);
                }
            }
        }

        return area;
    }
}
