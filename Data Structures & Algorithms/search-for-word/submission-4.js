class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visited = new Set();
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                if (word.at(0) === board[r][c]) {
                    if (this.dfs(board, word, 0, r, c, visited)) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    dfs(board, word, index, r, c, visited) {
        // found the whole word
        if (index === word.length) {
            return true;
        }

        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || visited.has(r + '-' + c) || board[r][c] != word.at(index)) {
            return false;
        }

        // we have found a valid spot, and must continue recursing through the board
        visited.add(r + '-' + c);

        const dr = [1, -1, 0, 0];
        const dc = [0, 0, 1, -1];

        for (let i = 0; i < dr.length; i++) {
            const newR = r + dr[i];
            const newC = c + dc[i];

            if (this.dfs(board, word, index + 1, newR, newC, visited)) {
                return true;
            }
        }

        visited.delete(r + '-' + c);

        return false;
    }
}
