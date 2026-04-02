class Solution {
    public int uniquePaths(int m, int n) {
        int[][] paths = new int[m][n];

        paths[m - 1][n - 1] = 1;

        for (int r = m - 1; r >= 0; r--) {
            for (int c = n - 1; c >= 0; c--) {
                // skip the most bottom right
                if (r == (m - 1) && c == (n - 1)) {
                    continue;
                }
                int downPaths = r + 1 >= m ? 0 : paths[r + 1][c];
                int rightPaths = c + 1 >= n ? 0 : paths[r][c + 1];
                paths[r][c] = downPaths + rightPaths;
            }
        }

        return paths[0][0];
    }
}
