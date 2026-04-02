class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> set = new HashSet<>(wordDict);
        Map<String, Boolean> memo = new HashMap<>();
        return wordBreakHelper(s, set, memo);
    }

    private boolean wordBreakHelper(String s, Set<String> wordDict, Map<String, Boolean> memo) {
        if (s.equals("")) {
            return true;
        }

        if (wordDict.contains(s)) {
            return true;
        }

        if (memo.containsKey(s)) {
            return memo.get(s);
        }

        // current word isn't valid, try breaking up
        for (int i = 0; i < s.length(); i++) {
            String currWord = s.substring(0, i + 1);
            if (wordDict.contains(currWord)) {
                if (wordBreakHelper(s.substring(i + 1), wordDict, memo)) {
                    memo.put(s, true);
                    return true;
                }
            }
        }

        memo.put(s, false);

        return false;
    }
}
