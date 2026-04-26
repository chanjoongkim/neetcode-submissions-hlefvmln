class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        if (!board) {
            return;
        }
        if (board.length <= 2 || board[0].length <= 2) {
            return;
        }

        // go through the whole board, and when we encounter an O, then we do a BFS
        // on it, and during the BFS traversal if at any point we hit the border, 
        // then we know it is NOT surrounded so we don't modify it.
        // otherwise if we do the whole BFS and haven't hit the border, then we should transform
        // all the Os in that BFS traversal to X
        // repeat until we are done with the whole board

        // skip processing the borders
        for (let r = 1; r < board.length - 1; r++) {
            for (let c = 1; c < board[0].length - 1; c++) {
                if (board[r][c] === 'O') {
                    // bfs function will do BFS traversal starting at [r,c]
                    // and transform the group of Os if it is surrounded into Xs
                    this.bfs(board, r, c);
                }
            }
        }
    }

    bfs(board, row, col) {
        const queue = new Queue();
        queue.enqueue([row, col]);
        const visited = new Set();
        visited.add(row + '-' + col);

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, 1, -1];

        while (!queue.isEmpty()) {
            const [r, c] = queue.dequeue();

            // check if our current spot is on a border or not
            if (r === 0 || r === board.length - 1 || c === 0 || c === board[0].length - 1) {
                // end the function immediately if we are on a border
                return;
            }

            // check adjacent spots for other Os to add
            for (let i = 0; i < dr.length; i++) {
                const newR = r + dr[i];
                const newC = c + dc[i];

                if (newR >= 0 && newR < board.length && newC >= 0 && newC < board[0].length && !visited.has(newR + '-' + newC) && board[newR][newC] === 'O') {
                    visited.add(newR + '-' + newC);
                    queue.enqueue([newR, newC]);
                }
            }
        }

        // if we reach the end of the BFS and got to here, then that means we did not encounter
        // any Os that were on a border, and thus it is surrounded
        // so now we just go through all of the spots in visited, and convert them to Xs
        for (const spots of visited) {
            const [r, c] = spots.split('-');

            board[r][c] = 'X';
        }
    }
}
