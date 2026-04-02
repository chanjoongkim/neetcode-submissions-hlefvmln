class Solution {
    public int minDistance(String word1, String word2) {
        return dfs(word1, 0, word2, 0);
    }

    private int dfs(String word1, int w1, String word2, int w2) {
        // happy base case, we reached the end of both words so return 0
        if (w1 >= word1.length() && w2 >= word2.length()) {
            return 0;
        }
        
        // base case, we reached end of w1, so we could insert the remaining characters of word2
        if (w1 >= word1.length()) {
            return word2.length() - w2;
        }

        // base case, we reached the end of w2, so we could delete the remaining characters of word1
        if (w2 >= word2.length()) {
            return word1.length() - w1;
        }

        // if both characters match, we don't need to take an operation so continue recursing
        if (word1.charAt(w1) == word2.charAt(w2)) {
            return dfs(word1, w1 + 1, word2, w2 + 1);
        }

        // else, take min path from insert, delete, and replace operations
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
