class Solution {
    public int numIslands(char[][] grid) {
        // do a BFS on the grid whenever we see "land", traverse until we can't go any further, and continue

        Set<String> visited = new HashSet<>();
        int islands = 0;

        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                String key = r + "-" + c;
                if (visited.contains(key)) {
                    continue;
                }
                visited.add(key);
                if (grid[r][c] == '0') {
                    continue;
                }

                // current spot must be land
                // do BFS on starting on this spot until we can't go anywhere else
                bfs(grid, visited, r, c);
                islands++;
            }
        }

        return islands;
    }

    private void bfs(char[][] grid, Set<String> visited, int r, int c) {
        // do BFS starting from r/c spot until we can't go anywhere else

        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{ r, c});

        while (!queue.isEmpty()) {
            int[] spot = queue.poll();
            String key = spot[0] + "-" + spot[1];
            visited.add(key);

            int[] dr = {-1, 1, 0, 0}; // delta row
            int[] dc = {0, 0, -1, 1}; // delta col

            // add available spots around it
            for (int i = 0; i < 4; i++) {
                int newR = spot[0] + dr[i];
                int newC = spot[1] + dc[i];

                if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.contains(newR + "-" + newC) && grid[newR][newC] == '1') {
                    queue.offer(new int[] { newR, newC });
                }
            }
        }
    }
}
