class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (!s) {
            return 0;
        }
        if (s.length === 1) {
            return 1;
        }

        const charFreq = new Map();
        let left = 0;
        // let right = 0;
        let maxLength = 0;
        let maxFreq = 0;

        for (let right = 0; right < s.length; right++) {
            charFreq.set(s[right], (charFreq.get(s[right]) ?? 0) + 1);
            maxFreq = Math.max(maxFreq, charFreq.get(s[right]));

            while ((right - left + 1) - maxFreq > k) {
                // need to move left over by one and update the freqs
                charFreq.set(s[left], charFreq.get(s[left]) - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
            // right++;
        }

        return maxLength;
    }
}
