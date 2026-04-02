class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sChars = {};
        const tChars = {};

        s.split('').forEach(char => sChars[char] = sChars[char] ? sChars[char] + 1 : 1);
        t.split('').forEach(char => tChars[char] = tChars[char] ? tChars[char] + 1 : 1);

        for (const char in sChars) {
            if (sChars[char] !== tChars[char]) {
                return false;
            }
        }

        return true;
    }
}
