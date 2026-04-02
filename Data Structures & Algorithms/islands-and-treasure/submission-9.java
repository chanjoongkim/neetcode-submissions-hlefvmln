class Solution {
    public void islandsAndTreasure(int[][] grid) {
        Queue<Pair<Integer, Integer>> queue = new LinkedList<>();
        Set<String> visited = new HashSet<>();

        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                // find all treasure chests initially
                if (grid[r][c] == 0) {
                    visited.add(r + "-" + c);
                    queue.offer(new Pair<>(r, c));
                }
            }
        }

        int[] dr = new int[] { -1, 1, 0, 0 };
        int[] dc = new int[] { 0, 0, -1, 1 };

        // do BFS on our known treasure chests, and iterate all neighbors. Update values based on current "level" of the BFS we are doing
        int level = 0;
        while (!queue.isEmpty()) {
            int levelSize = queue.size();

            // go through all the current spots in our queue (level), and update the value in the grid. Then add neighbors, increment level, and continue
            for (int i = 0; i < levelSize; i++) {
                Pair<Integer, Integer> spot = queue.poll();
                int r = spot.getKey();
                int c = spot.getValue();

                grid[r][c] = level;

                for (int j = 0; j < 4; j++) {
                    int newR = r + dr[j];
                    int newC = c + dc[j];

                    if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.contains(newR + "-" + newC) && grid[newR][newC] != -1) {
                        visited.add(newR + "-" + newC);
                        queue.offer(new Pair<>(newR, newC));
                    }
                }
            }
            level++;
        }
    }
}
