class Solution {
    public int numDistinct(String s, String t) {
        Map<String, Integer> memo = new HashMap<>();
        return dfs(s, 0, t, 0, memo);
    }

    private int dfs(String s, int sI, String t, int tI, Map<String, Integer> memo) {
        // found a subsequence because we ran out of t
        if (tI >= t.length()) {
            return 1;
        }
        // ran out of s so impossible
        else if (sI >= s.length()) {
            return 0;
        }
        String key = sI + "-" + tI;

        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        // at each step, we can either skip the current s char and recurse
        int skip = dfs(s, sI + 1, t, tI, memo);
        int include = 0;
        // or we can choose to include s char (if it matches t char)
        if (s.charAt(sI) == t.charAt(tI)) {
            include = dfs(s, sI + 1, t, tI + 1, memo);
        }

        // result is the sum of both path options
        int result = skip + include;
        memo.put(key, result);

        return result;
    }
}
