class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        char[][] board = new char[n][n];

        // make the whole board blank initially
        for (int r = 0; r < board.length; r++) {
            for (int c = 0; c < board[0].length; c++) {
                board[r][c] = '.';
            }
        }

        boolean[] c = new boolean[n];

        backtrack(board, 0, c, result);

        return result;
    }

    private void backtrack(char[][] board, int r, boolean[] c, List<List<String>> result) {
        // we reached the end of the board, so valid case
        if (r == board.length) {
            List<String> res = new ArrayList<>();
            for (char[] row : board) {
                res.add(String.valueOf(row));
            }
            result.add(res);
            

            return;
        }

        // we can make an optimization by passing down known "columns" that we have already placed queens
        for (int i = 0; i < board.length; i++) {
            // if we already placed a queen at column i somewhere else, then skip
            if (c[i]) {
                continue;
            }

            // else, this is a potential spot for us
            if (isSafe(board, r, i)) {

                board[r][i] = 'Q';
                c[i] = true;
                backtrack(board, r + 1, c, result);
                c[i] = false;
                board[r][i] = '.';
            }
            
        }
    }

    private boolean isSafe(char[][] board, int r, int c) {
        for (int i = r - 1; i >= 0; i--) {
            if (board[i][c] == 'Q') return false;
        }
        for (int i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }
        for (int i = r - 1, j = c + 1; i >= 0 && j < board.length; i--, j++) {
            if (board[i][j] == 'Q') return false;
        }
        return true;
    }
}
