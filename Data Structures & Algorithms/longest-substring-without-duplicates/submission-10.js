class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s) {
            return 0;
        }

        let l = 0;
        let maxLength = 0;
        // store map of char->index we've seen
        let map = new Map();

        s.split('').forEach((c, r) => {
            if (map.has(c)) {
                const oldIndex = map.get(c);
                l = Math.max(oldIndex + 1, l);
            }
            map.set(c, r);
            maxLength = Math.max(maxLength, r - l + 1);
        })

        // for (const [r, c] of s.entries()) {
        //     // const c = s.charAt(r);
        //     if (map.has(c)) {
        //         const oldIndex = map.get(c);
        //         l = Math.max(oldIndex + 1, l);
        //     }
        //     map.set(c, r);
        //     maxLength = Math.max(maxLength, r - l + 1);
        // }

        return maxLength;
    }
}
