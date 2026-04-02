class Solution {
    public int characterReplacement(String s, int k) {
        if (s == null || s.length() == 0) {
            return 0;
        }

        // populate char freqs with 0s for all capital English letters
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < 26; i++) {
            map.put((char)('A' + i), 0);
        }

        int left = 0;
        int right = 0;
        int maxLength = 0;

        while (right < s.length()) {
            char rightChar = s.charAt(right);
            map.put(rightChar, map.get(rightChar) + 1);

            if (substringIsValid(map, right - left + 1, k)) {
                maxLength = Math.max(maxLength, right - left + 1);
            } else {
                while (!substringIsValid(map, right - left + 1, k) && left < right) {
                    char leftChar = s.charAt(left);
                    map.put(leftChar, map.get(leftChar) - 1);
                    left++;
                }
                maxLength = Math.max(maxLength, right - left + 1);
            }
            right++;
        }

        return maxLength;
    }

    private boolean substringIsValid(Map<Character, Integer> charFreqs, int strLength, int k) {
        Character mostFreq = getMostFreqChar(charFreqs);
        return (strLength - charFreqs.get(mostFreq) <= k);
    }

    private Character getMostFreqChar(Map<Character, Integer> charFreqs) {
        char mostFreq = 'a';
        int mostFreqCount = 0;
        for (Map.Entry<Character, Integer> entry : charFreqs.entrySet()) {
            Character c = entry.getKey();
            Integer count = entry.getValue();

            if (count > mostFreqCount) {
                mostFreq = c;
                mostFreqCount = count;
            }
        }

        return mostFreq;
    }
}
