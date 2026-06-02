class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const queue = new Queue();

        // do multi-point BFS

        // step 1: identify and add all rotten fruit to the queue
        // step 2: then do BFS, with the queue populated with all rotten fruit
        // at the start of each cycle we get the size of the queue (which represents the "level"), and increment our result
        // then go through the whole level size and identify any neighboring fruits which are rotten
        // repeat until the queue is empty

        let fresh = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }
                else if (grid[r][c] === 1) {
                    fresh++;
                }
            }
        }

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, -1, 1];

        let result = 0;
        while (fresh > 0 && !queue.isEmpty()) {
            const levelSize = queue.size();

            result++;

            for (let i = 0; i < levelSize; i++) {
                const [r, c] = queue.pop();

                for (let j = 0; j < dr.length; j++) {
                    const newR = r + dr[j];
                    const newC = c + dc[j];

                    if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && grid[newR][newC] === 1) {
                        queue.push([newR, newC]);
                        grid[newR][newC] = 2;
                        fresh--;
                    }
                }
            }
            
        }

        return fresh === 0 ? result : -1;
    }
}
