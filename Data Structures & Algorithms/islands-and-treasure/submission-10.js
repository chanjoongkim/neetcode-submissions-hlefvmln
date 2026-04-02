class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        // do multi-source BFS on all treasure chests

        const visited = new Set();
        const queue = new Queue();

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] == 0) {
                    visited.add(r + '-' + c);
                    queue.enqueue([r, c]);
                }
            }
        }

        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];

        let level = 0;
        while (!queue.isEmpty()) {
            const levelSize = queue.size();

            for (let i = 0; i < levelSize; i++) {
                const [r, c] = queue.dequeue();

                grid[r][c] = level;

                // iterate through neighbors
                for (let j = 0; j < 4; j++) {
                    const [newR, newC] = [r + dr[j], c + dc[j]];
                    
                    if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.has(newR + '-' + newC) && grid[newR][newC] != -1) {
                        visited.add(newR + '-' + newC);
                        queue.enqueue([newR, newC]);
                    }
                }
            }

            level++;
        }
    }
}
