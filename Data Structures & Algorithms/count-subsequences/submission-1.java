class Solution {
    public int numDistinct(String s, String t) {
        return dfs(s, 0, t, 0);
    }

    private int dfs(String s, int sI, String t, int tI) {
        // found a subsequence because we ran out of t
        if (tI >= t.length()) {
            return 1;
        }
        // ran out of s so impossible
        else if (sI >= s.length()) {
            return 0;
        }

        int skip = dfs(s, sI + 1, t, tI);
        int include = 0;
        if (s.charAt(sI) == t.charAt(tI)) {
            include = dfs(s, sI + 1, t, tI + 1);
        }

        return skip + include;
    }
}
