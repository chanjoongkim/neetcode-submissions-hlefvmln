class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        Map<String, Integer> memo = new HashMap<>();
        return dp(text1, 0, text2, 0, memo);
    }

    private int dp(String text1, int i1, String text2, int i2, Map<String, Integer> memo) {
        if (i1 >= text1.length() || i2 >= text2.length()) {
            return 0;
        }

        String key = i1 + "-" + i2;

        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        if (text1.charAt(i1) == text2.charAt(i2)) {
            int result = 1 + dp(text1, i1 + 1, text2, i2 + 1, memo);
            memo.put(key, result);
            return result;
        }

        int result = Math.max(dp(text1, i1 + 1, text2, i2, memo), dp(text1, i1, text2, i2 + 1, memo));
        memo.put(key, result);
        return result;
    }
}
