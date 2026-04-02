class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = {};

        let left = 0;
        let right = 0;
        let maxLength = 0;

        while (right < s.length) {
            const c = s.charAt(right);

            if (c in map) {
                map[c] = 1 + map[c];
            } else {
                map[c] = 1;
            }

            while ((right - left + 1) - Math.max(...Object.values(map)) > k) {
                const leftC = s.charAt(left);
                map[leftC] = map[leftC] - 1;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }

        return maxLength;
    }
}
