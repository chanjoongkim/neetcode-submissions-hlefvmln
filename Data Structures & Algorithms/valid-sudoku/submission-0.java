class Solution {
    public boolean isValidSudoku(char[][] board) {
        // check all rows
        for (int r = 0; r < board.length; r++) {
            Set<Character> set = new HashSet<>();
            for (int c = 0; c < board[0].length; c++) {
                // duplicate
                if (set.contains(board[r][c])) {
                    // System.out.println("duplicate row. row: " + r + " col: " + c);
                    return false;
                }
                if (board[r][c] != '.') {
                    set.add(board[r][c]);
                }
            }
        }

        // check all columns
        for (int c = 0; c < board[0].length; c++) {
            Set<Character> set = new HashSet<>();
            for (int r = 0; r < board.length; r++) {
                // duplicate
                if (set.contains(board[r][c])) {
                    // System.out.println("duplicate col: row: " + r + " col: " + c);
                    return false;
                }
                if (board[r][c] != '.') {
                    set.add(board[r][c]);
                }
            }
        }

        // check all 3x3 squares
        for (int r = 0; r < board.length; r += 3) {
            for (int c = 0; c < board[0].length; c += 3) {
                Set<Character> set = new HashSet<>();
                // iterate through the 3x3 square here
                for (int ir = r; ir < r + 3; ir++) {
                    for (int ic = c; ic < c + 3; ic++) {
                        // System.out.println("r: " + r + " c: " + c + " ir: " + ir + " ic: " + ic);
                        if (set.contains(board[ir][ic])) {
                            // System.out.println("duplicate square: row: " + r + " col: " + c);
                            return false;
                        }
                        if (board[ir][ic] != '.') {
                            set.add(board[ir][ic]);
                        }
                    }
                }
            }
        }

        return true;
    }
}
