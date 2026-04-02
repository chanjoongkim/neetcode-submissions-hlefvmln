class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        int maxArea = 0;

        Set<String> visited = new HashSet<>();

        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                String key = r + "-" + c;
                if (visited.contains(key)) {
                    continue;
                }

                // visited.add(key);

                if (grid[r][c] == 0) {
                    continue;
                }

                int islandArea = dfs(grid, visited, r, c);

                maxArea = Math.max(maxArea, islandArea);
            }
        }

        return maxArea;
    }

    private int dfs(int[][] grid, Set<String> visited, int r, int c) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) {
            return 0;
        }

        if (visited.contains(r + "-" + c)) {
            return 0;
        }

        visited.add(r + "-" + c);

        if (grid[r][c] == 0) {
            return 0;
        }

        return 1 + (dfs(grid, visited, r - 1, c) + dfs(grid, visited, r + 1, c) + dfs(grid, visited, r, c - 1) + dfs(grid, visited, r, c + 1));
    }
}
