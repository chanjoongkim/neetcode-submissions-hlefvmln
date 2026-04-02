class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        if (s.length() == 1) {
            return 1;
        }

        int maxLength = 1;
        int left = 0;
        int right = 1;
        // map will store the char->index mapping so we know where to "reset" left to
        Map<Character, Integer> map = new HashMap<>();
        // initialize set at the beginning
        map.put(s.charAt(0), 0);
        while (right < s.length()) {
            char c = s.charAt(right);
            // if set contains right's character, then we reset our left value and update the char's index in our map
            if (map.containsKey(c)) {
                // check if map's c index is left of our current left (if so, we can update without consequences)
                int oldIndex = map.get(c);
                if (oldIndex < left) {
                    map.put(c, right);
                    maxLength = Math.max(maxLength, right - left + 1);
                } else {
                    // else, move left to one past the previous index to reset our sliding window
                    map.put(c, right);
                    left = oldIndex + 1;
                }
            } else {
                // else, we know right extends a valid substring without a duplicate character
                // so add the char to our set and see if we have the longest substring
                map.put(c, right);
                maxLength = Math.max(maxLength, right - left + 1);
            }
            right++;
        }

        return maxLength;
    }
}
