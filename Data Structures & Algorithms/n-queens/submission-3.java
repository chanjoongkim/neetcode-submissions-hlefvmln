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
        Set<Integer> posDiag = new HashSet<>();
        Set<Integer> negDiag = new HashSet<>();

        backtrack(board, 0, c, result, posDiag, negDiag);

        return result;
    }

    private void backtrack(char[][] board, int r, boolean[] c, List<List<String>> result, Set<Integer> posDiag, Set<Integer> negDiag) {
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

            // check if we have placed a queen on the same positive and negative diagnols 
            // pos is bottom left to upper right, so (r + c) remains constant
            // neg is top left to bottom right, so (r - c) remains constant
            int pos = r + i;
            int neg = r - i;

            if (posDiag.contains(pos) || negDiag.contains(neg)) {
                continue;
            }

            // else, this is a potential spot for us
            board[r][i] = 'Q';
            c[i] = true;
            posDiag.add(pos);
            negDiag.add(neg);
            backtrack(board, r + 1, c, result, posDiag, negDiag);
            c[i] = false;
            posDiag.remove(pos);
            negDiag.remove(neg);
            board[r][i] = '.';
            
        }
    }
}
