class Solution {
    public int longestIncreasingPath(int[][] matrix) {
        Set<String> visited = new HashSet<>();
        Map<String, Integer> memo = new HashMap<>();
        int result = 0;
        for (int r = 0; r < matrix.length; r++) {
            for (int c = 0; c < matrix[0].length; c++) {
                visited.add(r + "-" + c);
                result = Math.max(result, dfs(matrix, r, c, visited, memo));
                visited.remove(r + "-" + c);
            }
        }

        return result;
    }

    private int dfs(int[][] matrix, int r, int c, Set<String> visited, Map<String, Integer> memo) {
        if (r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length) {
            return 0;
        }

        String key = r + "-" + c + "-";
        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        int[] dr = new int[] { -1, 1, 0, 0 };
        int[] dc = new int[] { 0, 0, -1, 1 };

        int maxSubpath = 0;

        for (int i = 0; i < 4; i++) {
            int newR = r + dr[i];
            int newC = c + dc[i];

            if (newR >= 0 && newR < matrix.length && newC >= 0 && newC < matrix[0].length && !visited.contains(newR + "-" + newC) && matrix[newR][newC] > matrix[r][c]) {
                visited.add(newR + "-" + newC);
                maxSubpath = Math.max(maxSubpath, dfs(matrix, newR, newC, visited, memo));
                visited.remove(newR + "-" + newC);
            }
        }

        memo.put(key, 1 + maxSubpath);

        return 1 + maxSubpath;
    }
}
