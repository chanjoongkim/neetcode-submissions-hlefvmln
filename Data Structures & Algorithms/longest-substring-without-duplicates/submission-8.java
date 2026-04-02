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
            // if our map contains c, reset left to the most rightward spot
            // if oldIndex was left of our current left (so not part of our current substring), then left stays put
            // but if oldIndex was equal to our left, then move left over one spot
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
