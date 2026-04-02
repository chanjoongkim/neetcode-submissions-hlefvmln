class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) {
            return 0;
        }
        
        let maxLength = 0;
        let l = 0;
        const set = new Set();

        for (let r = 0; r < s.length; r++) {
            const c = s.charAt(r);
            while (set.has(c)) {
                set.delete(s.charAt(l));
                l++;
            }
            set.add(c);
            maxLength = Math.max(maxLength, r - l + 1);
        }

        return maxLength;
    }
}
