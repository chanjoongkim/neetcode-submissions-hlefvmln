class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if (!heights) {
            return [];
        }

        const pacificReach = Array.from({ length: heights.length }, () => Array(heights[0].length).fill(false));
        const atlanticReach = Array.from({ length: heights.length }, () => Array(heights[0].length).fill(false));

        this.bfs(heights, true, pacificReach);
        this.bfs(heights, false, atlanticReach);

        const result = [];

        for (let r = 0; r < heights.length; r++) {
            for (let c = 0; c < heights[0].length; c++) {
                if (pacificReach[r][c] && atlanticReach[r][c]) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }

    bfs(grid, isPacific, reach) {
        const queue = new Queue();
        const visited = new Set();

        // initialize queue
        if (isPacific) {
            for (let r = 0; r < grid.length; r++) {
                queue.enqueue([r, 0]);
                visited.add(r + '-' + 0);
                reach[r][0] = true;
            }
            for (let c = 0; c < grid[0].length; c++) {
                queue.enqueue([0, c]);
                visited.add(0 + '-' + c);
                reach[0][c] = true;
            }
        } else {
            for (let r = 0; r < grid.length; r++) {
                queue.enqueue([r, grid[0].length - 1]);
                visited.add(r + '-' + grid[0].length - 1);
                reach[r][grid[0].length - 1] = true;
            }
            for (let c = 0; c < grid[0].length; c++) {
                queue.enqueue([grid.length - 1, c]);
                visited.add(grid.length - 1 + '-' + c);
                reach[grid.length - 1][c] = true;
            }
        }

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, -1, 1];

        while (!queue.isEmpty()) {
            const [r, c] = queue.dequeue();

            // check adjacent cells
            for (let i = 0; i < dr.length; i++) {
                const newR = r + dr[i];
                const newC = c + dc[i];

                if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.has(newR + '-' + newC) && grid[newR][newC] >= grid[r][c]) {
                    visited.add(newR + '-' + newC);
                    queue.enqueue([newR, newC]);
                    reach[newR][newC] = true;
                }
            }
        }
    }
}
