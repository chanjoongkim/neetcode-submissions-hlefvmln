class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        if (!grid) {
            return -1;
        }

        const rotten = new Set();
        const visited = new Set();

        // find all rotten fruit first
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 2) {
                    rotten.add([r, c]);
                    visited.add(r + '-' + c);
                }
            }
        }

        // do multi-source BFS and initialize with rotten fruits
        const queue = new Queue();
        for (const f of rotten) {
            queue.enqueue(f);
        }
        let distance = 0;

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, -1, 1];

        while (!queue.isEmpty()) {
            const levelSize = queue.size();
            distance++;

            for (let i = 0; i < levelSize; i++) {
                const [r, c] = queue.dequeue();

                // go through adj cells
                for (let j = 0; j < dr.length; j++) {
                    const newR = r + dr[j];
                    const newC = c + dc[j];

                    if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.has(newR + '-' + newC) && grid[newR][newC] === 1) {
                        visited.add(newR + '-' + newC);
                        queue.enqueue([newR, newC]);
                        grid[newR][newC] = 2;
                    }
                }
            }
        }

        console.log(grid);
        console.log

        // iterate through grid and see if there's any fresh fruit left
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 1) {
                    return -1;
                }
            }
        }

        return distance - 1 > 0 ? distance - 1 : 0;
    }
}
