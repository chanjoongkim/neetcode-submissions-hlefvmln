class Solution {
    /**
    input: "zxyzxyz"

    indexMap: {
        z: 3
        x: 1
        y: 2
    }
    substring: "xyz"
    left: 1
    right: 3
    result: 3


    input: "abba"

    indexMap: {
        a: 0
        b: 2
    }
    substring: "a"
    left: 3
    right: 3
    result: 2
    */
    public int lengthOfLongestSubstring(String s) {
        if (s.length() < 2) {
            return s.length();
        }

        int result = 1;
        int left = 0;
        int right = 0;

        // store char to index as we build substring
        Map<Character, Integer> indexMap = new HashMap<>();
        indexMap.put(s.charAt(0), 0);

        // sliding window, start from left to right, and adjust left index as we encounter repeat characters
        for (int i = 1; i < s.length(); i++) {
            right = i;
            if (!indexMap.containsKey(s.charAt(right))) {
                indexMap.put(s.charAt(right), right);
            } else {
                // we found a repeat character, so adjust left to be one past the previous right's index
                int oldIndex = indexMap.get(s.charAt(right));
                left = Math.max(oldIndex + 1, left);
                indexMap.put(s.charAt(right), right);
            }

            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
