class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = new Set();
        let islands = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (visited.has(r + '-' + c)) {
                    continue;
                }
                visited.add(r + '-' + c);

                if (grid[r][c] === '0') {
                    continue;
                }

                // do BFS on this island until we can't
                this.bfs(grid, visited, r, c);
                islands++;
            }
        }

        return islands;
    }

    bfs(grid, visited, r, c) {
        const q = new Queue();
        q.enqueue([r, c]);

        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];

        while (!q.isEmpty()) {
            const [row, col] = q.dequeue();

            visited.add(row + '-' + col);

            for (let i = 0; i < 4; i++) {
                const newR = row + dr[i];
                const newC = col + dc[i];

                if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.has(newR + '-' + newC) && grid[newR][newC] === '1') {
                    q.enqueue([newR, newC]);
                }
            }
        }
    }
}
