class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        Set<String> visited = new HashSet<>();
        int maxArea = 0;

        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                String key = r + "-" + c;
                if (visited.contains(key)) {
                    continue;
                }

                if (grid[r][c] == 0) {
                    continue;
                }

                int islandArea = bfs(grid, visited, r, c);
                System.out.println(islandArea);

                maxArea = Math.max(maxArea, islandArea);
            }
        }

        return maxArea;
    }

    private int bfs(int[][] grid, Set<String> visited, int originalR, int originalC) {
        Queue<Pair<Integer, Integer>> queue = new LinkedList<>();
        queue.add(new Pair<>(originalR, originalC));
        visited.add(originalR + "-" + originalC);

        int area = 0;

        int[] dr = new int[] { -1, 1, 0, 0 };
        int[] dc = new int[] { 0, 0, -1, 1 };

        while (!queue.isEmpty()) {
            Pair<Integer, Integer> spot = queue.poll();
            

            int r = spot.getKey();
            int c = spot.getValue();

            String key = r + "-" + c;

            

            area++;

            System.out.println(key);

            for (int i = 0; i < 4; i++) {
                int newR = r + dr[i];
                int newC = c + dc[i];

                if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.contains(newR + "-" + newC) && grid[newR][newC] == 1) {
                    visited.add(newR + "-" + newC);
                    queue.add(new Pair<>(newR, newC));
                }
            }
        }

        return area;
    }
}
