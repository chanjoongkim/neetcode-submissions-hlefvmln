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
        // charFreq.set(s.charAt(0), 1);
        let right = 0;
        let maxLength = 0;
        let maxFreq = 0;

        while (right < s.length) {
            const c = s.charAt(right);
            let freq = charFreq.get(c) ?? 0;
            freq++;

            charFreq.set(c, freq);
            maxFreq = Math.max(maxFreq, charFreq.get(s.charAt(right)));
            const replacements = (right - left + 1) - maxFreq;

            while ((right - left + 1) - maxFreq > k) {
                // need to move left over by one and update the freqs
                const oldLeftChar = s.charAt(left);
                left++;
                charFreq.set(oldLeftChar, charFreq.get(oldLeftChar) - 1);
            }

            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }

        return maxLength;
    }
}
