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
                if (this.dfs(board, r, c, visited, word, 0)) {
                    return true;
                }
            }
        }

        return false;
    }

    dfs(board, r, c, visited, word, index) {
        if (index >= word.length) {
            return true;
        }

        const visitedKey = r + "-" + c;

        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || visited.has(visitedKey) || board[r][c] !== word.charAt(index)) {
            return false;
        }

        visited.add(visitedKey);

        if (this.dfs(board, r - 1, c, visited, word, index + 1) ||
            this.dfs(board, r + 1, c, visited, word, index + 1) ||
            this.dfs(board, r, c - 1, visited, word, index + 1) ||
            this.dfs(board, r, c + 1, visited, word, index + 1)) {
                return true;
            }

        visited.delete(visitedKey);
    }
}
