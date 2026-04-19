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

        while (right < s.length) {
            const c = s.charAt(right);
            let freq = charFreq.get(c) ?? 0;
            freq++;

            charFreq.set(c, freq);
            const maxFreq = this.getMaxFreq(charFreq);
            const replacements = (right - left + 1) - maxFreq;

            if (replacements > k) {
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

    getMaxFreq(charFreq) {
        return Math.max(...charFreq.values());
    }

    bruteForce(s, k) {
        let result = 0;

        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j < s.length; j++) {
                const diff = this.getFreqDiff(s.substring(i, j + 1));
                if (diff <= k) {
                    result = Math.max(result, j - i + 1);
                }
            }
        }

        return result;
    }

    getFreqDiff(s) {
        const charFreqs = new Map();
        let maxFreq = 0;

        for (let i = 0; i < s.length; i++) {
            let freq = charFreqs.get(s.charAt(i)) ?? 0;
            freq++;
            maxFreq = Math.max(maxFreq, freq);
            charFreqs.set(s.charAt(i), freq);
        }

        return s.length - maxFreq;
    }
}
