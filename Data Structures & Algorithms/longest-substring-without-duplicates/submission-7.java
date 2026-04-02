class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        if (s.length() == 1) {
            return 1;
        }

        int maxLength = 0;
        int l = 0;
        Map<Character, Integer> map = new HashMap<>();
        for (int r = 0; r < s.length(); r++) {
            char c = s.charAt(r);
            if (map.containsKey(c)) {
                int oldIndex = map.get(c);
                l = Math.max(oldIndex + 1, l);
            }

            map.put(c, r);
            maxLength = Math.max(maxLength, r - l + 1);
        }

        return maxLength;
    }
}
