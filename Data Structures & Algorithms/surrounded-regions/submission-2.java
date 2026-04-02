class Solution {
    public void solve(char[][] board) {
        int rows = board.length;
        int cols = board[0].length;

        int[] dr = new int[] { -1, 1, 0, 0 };
        int[] dc = new int[] { 0, 0, -1, 1 };

        // Set<String> visited = new HashSet<>();
        // iterate through board
        // whenever we get to a O spot, do DFS and see if it is surrounded
        // if so, then do DFS again but flip the characters
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (board[r][c] == 'O') {
                    Set<String> visited = new HashSet<>();
                    boolean surrounded = dfsSurrounded(board, visited, r, c);

                    if (surrounded) {
                        // do BFS but flip 
                        Queue<Pair<Integer, Integer>> queue = new LinkedList<>();

                        queue.offer(new Pair<>(r, c));

                        while(!queue.isEmpty()) {
                            Pair<Integer, Integer> spot = queue.poll();
                            int newR = spot.getKey();
                            int newC = spot.getValue();

                            // flip value
                            board[newR][newC] = 'X';
                            for (int i = 0; i < 4; i++) {
                                int newerR = newR + dr[i];
                                int newerC = newC + dc[i];

                                if (newerR >= 0 && newerR < rows && newerC >= 0 && newerC < cols && board[newerR][newerC] == 'O') {
                                    queue.offer(new Pair<>(newerR, newerC));
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    private boolean dfsSurrounded(char[][] board, Set<String> visited, int r, int c) {
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) {
            return true;
        }

        visited.add(r + "-" + c);

        // if we are an O and we are at the edge, then not surrounded (return false)
        if (board[r][c] == 'O' && (r == 0 || r == board.length - 1 || c == 0 || c == board[0].length - 1)) {
            return false;
        }

        int[] dr = new int[] { -1, 1, 0, 0 };
        int[] dc = new int[] { 0, 0, -1, 1 };

        boolean surrounded = true;

        for (int i = 0; i < 4; i++) {
            int newR = r + dr[i];
            int newC = c + dc[i];

            if (newR >= 0 && newR < board.length && newC >= 0 && newC < board[0].length && !visited.contains(newR + "-" + newC) && board[newR][newC] == 'O') {
                visited.add(newR + "-" + newC);
                surrounded = surrounded && dfsSurrounded(board, visited, newR, newC);
            }
        }

        // visited.remove(r + "-" + c);

        return surrounded;
    }
}
