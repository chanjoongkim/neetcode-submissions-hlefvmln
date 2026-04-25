class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        // algorithm:
        // first pass, find all treasure chests and mark the row/col
        // second pass, do a BFS on each of the treasure chests. As we recurse out during BFS we keep track of how far away
        // we are from the original chest, and update land cells if the current distance is smaller

        const chests = new Set();
        const visited = new Set();
        
        // find all chests
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 0) {
                    chests.add([r, c]);
                    visited.add(r + '-' + c);
                }
            }
        }

        // do multi-source BFS
        const queue = new Queue();
        for (const chest of chests) {
            queue.enqueue(chest);
        }
        // queue.enqueue(chest);
        let distance = 0;

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, -1, 1];

        while (!queue.isEmpty()) {
            const levelSize = queue.size();

            distance++;

            for (let i = 0; i < levelSize; i++) {
                const [r, c] = queue.dequeue();
                // visited.add(r + '-' + c);
                // find all adjacent cells
                for (let j = 0; j < dr.length; j++) {
                    const newR = r + dr[j];
                    const newC = c + dc[j];

                    if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.has(newR + '-' + newC) && grid[newR][newC] !== -1 && grid[newR][newC] !== 0) {
                        if (grid[newR][newC] > distance) {
                            grid[newR][newC] = distance;
                        }
                        queue.enqueue([newR, newC]);
                        visited.add(newR + '-' + newC);
                    }
                }
            }
        }


        for (const chest of chests) {
            this.bfs(grid, chest);
        }
    }

    bfs(grid, chest) {
        const queue = new Queue();
        queue.enqueue(chest);
        let distance = 0;

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, -1, 1];

        const visited = new Set();

        while (!queue.isEmpty()) {
            const levelSize = queue.size();

            distance++;

            for (let i = 0; i < levelSize; i++) {
                const [r, c] = queue.dequeue();
                visited.add(r + '-' + c);
                // find all adjacent cells
                for (let j = 0; j < dr.length; j++) {
                    const newR = r + dr[j];
                    const newC = c + dc[j];

                    if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.has(newR + '-' + newC) && grid[newR][newC] !== -1 && grid[newR][newC] !== 0) {
                        if (grid[newR][newC] > distance) {
                            grid[newR][newC] = distance;
                        }
                        queue.enqueue([newR, newC]);
                    }
                }
            }
        }
    }
}
