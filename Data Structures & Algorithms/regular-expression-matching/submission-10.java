class Solution {
    public boolean isMatch(String s, String p) {
        Map<String, Boolean> memo = new HashMap<>();
        return dfs(s, 0, p, 0, memo);
    }

    private boolean dfs(String s, int sIndex, String p, int pIndex, Map<String, Boolean> memo) {
        if (sIndex >= s.length() && pIndex >= p.length()) {
            return true;
        }

        String key = sIndex + "-" + pIndex;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        if (pIndex >= p.length()) {
            return false;
        }

        // edge case where s is done
        // but we could have something like a* remaining in p, which is valid since it's 0 times so we need to continue
        if (sIndex >= s.length()) {
            if (pIndex + 1 < p.length() && p.charAt(pIndex + 1) == '*') {
                return dfs(s, sIndex, p, pIndex + 2, memo);
            }
            memo.put(key, false);
            return false;
        }

        if (pIndex + 1 < p.length() && p.charAt(pIndex + 1) == '*') {
            char precedingChar = p.charAt(pIndex);

            // always try the 0 case 
            if (dfs(s, sIndex, p, pIndex + 2, memo)) {
                return true;
            }

            // while s char is equal to preceding char, recurse with the next sIndex and see if we get a true result eventually
            while (sIndex < s.length() && (precedingChar == '.' || s.charAt(sIndex) == precedingChar)) {
                if (dfs(s, sIndex + 1, p, pIndex + 2, memo)) {
                    return true;
                }
                sIndex++;
            }
            memo.put(key, false);
            return false;
        } else if (p.charAt(pIndex) == '.') {
            return dfs(s, sIndex + 1, p, pIndex + 1, memo);
        } else if (s.charAt(sIndex) == p.charAt(pIndex)) {
            return dfs(s, sIndex + 1, p, pIndex + 1, memo);
        } else {
            memo.put(key, false);
            return false;
        }
    }
}
