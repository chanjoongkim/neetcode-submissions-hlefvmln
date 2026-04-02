class Solution {
    public boolean exist(char[][] board, String word) {
        Set<String> visited = new HashSet<>();
        for (int r = 0; r < board.length; r++) {
            for (int c = 0; c < board[0].length; c++) {
                if (dfs(board, r, c, visited, word, 0)) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean dfs(char[][] board, int r, int c, Set<String> visited, String word, int index) {
        if (index >= word.length()) {
            // found the whole word
            return true;
        }

        // boundary check
        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) {
            return false;
        }

        // already visited
        if (visited.contains(r + "-" + c)) {
            return false;
        }

        if (board[r][c] != word.charAt(index)) {
            return false;
        }

        visited.add(r + "-" + c);

        if (dfs(board, r - 1, c, visited, word, index + 1) ||
            dfs(board, r + 1, c, visited, word, index + 1) || 
            dfs(board, r, c - 1, visited, word, index + 1) || 
            dfs(board, r, c + 1, visited, word, index + 1)) {
                return true;
            }

        visited.remove(r + "-" + c); 

        return false;
    }
}
