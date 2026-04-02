class Solution {
    public int minDistance(String word1, String word2) {
        return dfs(word1, 0, word2, 0);
    }

    private int dfs(String word1, int w1, String word2, int w2) {
        if (w1 >= word1.length() && w2 >= word2.length()) {
            return 0;
        }

        if (w1 >= word1.length()) {
            return word2.length() - w2;
        }

        if (w2 >= word2.length()) {
            return word1.length() - w1;
        }

        if (word1.charAt(w1) == word2.charAt(w2)) {
            return dfs(word1, w1 + 1, word2, w2 + 1);
        }

        int result = Integer.MAX_VALUE;
        // insert
        result = Math.min(result, dfs(word1, w1, word2, w2 + 1));
        // delete
        result = Math.min(result, dfs(word1, w1 + 1, word2, w2));
        // replace
        result = Math.min(result, dfs(word1, w1 + 1, word2, w2 + 1));

        return 1 + result;
    }
}
