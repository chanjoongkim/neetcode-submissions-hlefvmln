class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        int rows = heights.length;
        int cols = heights[0].length;

        Set<String> fromPacific = new HashSet<>();
        Set<String> fromAtlantic = new HashSet<>();

        // fill up fromPacific
        for (int c = 0; c < cols; c++) {
            dfs(heights, fromPacific, 0, c);
        }
        for (int r = 0; r < rows; r++) {
            dfs(heights, fromPacific, r, 0);
        }

        // fill up fromAtlantic
        for (int c = 0; c < cols; c++) {
            dfs(heights, fromAtlantic, heights.length - 1, c);
        }
        for (int r = 0; r < rows; r++) {
            dfs(heights, fromAtlantic, r, heights[0].length - 1);
        }

        List<List<Integer>> result = new ArrayList<>();
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                String key = r + "-" + c;
                if (fromPacific.contains(key) && fromAtlantic.contains(key)) {
                    result.add(new ArrayList<>(List.of(r, c)));
                }
            }
        }

        return result;
    }

    private void dfs(int[][] heights, Set<String> visited, int r, int c) {
        if (r < 0 || r >= heights.length || c < 0 || c >= heights[0].length) {
            return;
        }

        // if (visited.contains(r + "-" + c)) {
        //     return;
        // }

        visited.add(r + "-" + c);

        int[] dr = new int[] { -1, 1, 0, 0 };
        int[] dc = new int[] { 0, 0, -1, 1 };

        for (int i = 0; i < 4; i++) {
            int newR = r + dr[i];
            int newC = c + dc[i];

            if (newR >= 0 && newR < heights.length && newC >= 0 && newC < heights[0].length && !visited.contains(newR + "-" + newC) && heights[newR][newC] >= heights[r][c]) {
                visited.add(newR + "-" + newC);
                dfs(heights, visited, newR, newC);
            }
        }
    }
}
