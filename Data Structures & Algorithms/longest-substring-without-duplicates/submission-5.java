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
        Set<Character> set = new HashSet<>();
        for (int r = 0; r < s.length(); r++) {
            char c = s.charAt(r);
            // if our set contains right's character, then continually remove 
            // the left characters until right's character is no longer in the set
            // so basically, we shrink our sliding window rightward (moving left pointer to right) until
            // we are back at a valid substring without duplicates
            while (set.contains(c)) {
                set.remove(s.charAt(l));
                l++;
            }

            set.add(c);
            maxLength = Math.max(maxLength, r - l + 1);
        }

        return maxLength;
    }
}
