class Solution {
    class Pair {
        int r;
        int c;
        Pair(int r, int c) {
            this.r = r;
            this.c = c;
        }
    }
    public void islandsAndTreasure(int[][] grid) {
        if (grid == null) {
            return;
        }

        Queue<Pair> queue = new LinkedList<>();

        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                if (grid[r][c] == 0) {
                    queue.add(new Pair(r, c));
                }
            }
        }

        while (!queue.isEmpty()) {
            Pair pair = queue.poll();
            int r = pair.r;
            int c = pair.c;
            bfs(r - 1, c, r, c, grid, queue);
            bfs(r + 1, c, r, c, grid, queue);
            bfs(r, c - 1, r, c, grid, queue);
            bfs(r, c + 1, r, c, grid, queue);
        }
    }

    private void bfs(int r, int c, int oldR, int oldC, int[][] grid, Queue<Pair> queue) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] != Integer.MAX_VALUE) {
            return;
        }

        queue.add(new Pair(r, c));
        grid[r][c] = grid[oldR][oldC] + 1;
    }
} 
