class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length;
        const cols = board[0].length;


        // do DFS along border, marking reachable Os from the border (to preserve as Os as the end)
        for (let c = 0; c < cols; c++) {
            if (board[0][c] === 'O') {
                const visited = new Set();
                this.dfs(board, visited, 0, c)
            }
            if (board[rows - 1][c] === 'O') {
                const visited = new Set();
                this.dfs(board, visited, rows - 1, c)
            }
        }

        for (let r = 0; r < rows; r++) {
            if (board[r][0] === 'O') {
                const visited = new Set();
                this.dfs(board, visited, r, 0)
            }
            if (board[r][cols - 1] === 'O') {
                const visited = new Set();
                this.dfs(board, visited, r, cols - 1)
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === 'O') {
                    board[r][c] = 'X';
                } else if (board[r][c] === '#') {
                    board[r][c] = 'O';
                }
            }
        }
    }

    dfs(board, visited, r, c) {
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) {
            return;
        }

        visited.add(r + '-' + c);

        if (board[r][c] === 'X') {
            return;
        }

        // we are at an O
        board[r][c] = '#';

        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];

        for (let i = 0; i < 4; i++) {
            const newR = r + dr[i];
            const newC = c + dc[i];

            if (newR >= 0 && newR < board.length && newC >= 0 && newC < board[0].length && !visited.has(newR + '-' + newC)) {
                this.dfs(board, visited, newR, newC);
            }
        }
    }
}
