class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> set = new HashSet<>(wordDict);
        Map<Integer, Boolean> memo = new HashMap<>();
        return wordBreakHelper(s, 0, set, memo);
    }

    private boolean wordBreakHelper(String s, int index, Set<String> wordDict, Map<Integer, Boolean> memo) {
        if (index == s.length()) {
            return true;
        }

        if (memo.containsKey(index)) {
            return memo.get(index);
        }

        // current word isn't valid, try breaking up
        for (int i = index; i < s.length(); i++) {
            String currWord = s.substring(index, i + 1);
            if (wordDict.contains(currWord)) {
                if (wordBreakHelper(s, i + 1, wordDict, memo)) {
                    memo.put(index, true);
                    return true;
                }
            }
        }

        memo.put(index, false);

        return false;
    }
}
