class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        Map<String, Boolean> memo = new HashMap<>();
        return dfs(s1, 0, s2, 0, s3, 0, memo);
    }

    private boolean dfs(String s1, int i1, String s2, int i2, String s3, int i3, Map<String, Boolean> memo) {
        // base case, we made it to the end
        if (i1 >= s1.length() && i2 >= s2.length() && i3 >= s3.length()) {
            return true;
        }

        // if we have run out of s1 and s2, then not a valid case
        if (i1 >= s1.length() && i2 >= s2.length()) {
            return false;
        }

        // if we reached end of i3 but not the end of i1 or i2, then not a valid case
        if (i3 >= s3.length()) {
            return false;
        }

        String key = i1 + "-" + i2 + "-" + i3;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        boolean result = false;

        // continue recursing through i2 and i3 while we still have leftovers
        if (i1 >= s1.length()) {
            if (s2.charAt(i2) != s3.charAt(i3)) {
                memo.put(key, false);
                return false;
            }
            result = dfs(s1, i1, s2, i2 + 1, s3, i3 + 1, memo);
        } else if (i2 >= s2.length()) {
            // continue recursing through i1 and i3 while we still have leftovers
            if (s1.charAt(i1) != s3.charAt(i3)) {
                memo.put(key, false);
                return false;
            }
            result = dfs(s1, i1 + 1, s2, i2, s3, i3 + 1, memo);
        } else {
            // check both recursing through s1 and also s2
            if (s1.charAt(i1) == s3.charAt(i3)) {
                if (dfs(s1, i1 + 1, s2, i2, s3, i3 + 1, memo)) {
                    memo.put(key, true);
                    return true;
                }
            }
            if (s2.charAt(i2) == s3.charAt(i3)) {
                if (dfs(s1, i1, s2, i2 + 1, s3, i3 + 1, memo)) {
                    memo.put(key, true);
                    return true;
                }
            }
        }

        memo.put(key, result);

        return result;
    }
}
