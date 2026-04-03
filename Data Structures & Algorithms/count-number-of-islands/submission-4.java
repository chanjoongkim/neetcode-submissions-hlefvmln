class Solution {
    public int numIslands(char[][] grid) {
        Set<String> visited = new HashSet<>();

        int result = 0;

        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                if (grid[r][c] == '0' || visited.contains(r + "-" + c)) {
                    continue;
                }

                result++;
                dfs(grid, r, c, visited);
            }
        }

        return result;
    }

    private void dfs(char[][] grid, int r, int c, Set<String> visited) {
        // continue traversing through all 1's/land until we no longer can't
        // populate the visited set as we traverse so we don't re-visit the same spots (both in the recursive DFS traversal and at the parent level)

        // bounds check
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) {
            return;
        }

        // TODO: we may not need this check
        // if (visited.contains(r + "-" + c)) {
        //     return;
        // }

        visited.add(r + "-" + c);

        int[] dr = new int[] { -1, 1, 0, 0 };
        int[] dc = new int[] { 0, 0, -1, 1 };

        for (int i = 0; i < 4; i++) {
            int newR = r + dr[i];
            int newC = c + dc[i];

            if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.contains(newR + "-" + newC) && (grid[newR][newC] == '1')) {
                dfs(grid, newR, newC, visited);
            }
        }
    }
}
