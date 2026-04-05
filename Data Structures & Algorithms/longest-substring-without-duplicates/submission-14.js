class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 2) {
            return s.length;
        }

        let result = 1;
        let left = 0;
        let right = 0;

        const indexMap = new Map();
        indexMap.set(s.charAt(0), 0);

        for (let i = 1; i < s.length; i++) {
            right = i;
            const c = s.charAt(right);
            if (indexMap.has(c)) {
                const oldIndex = indexMap.get(c);
                left = Math.max(left, oldIndex + 1);
            }
            indexMap.set(c, right);

            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
