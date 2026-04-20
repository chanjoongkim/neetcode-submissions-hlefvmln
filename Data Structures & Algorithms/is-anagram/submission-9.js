class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (!s || !t) {
            return false;
        }

        if (s.length !== t.length) {
            return false;
        }

        const sChars = new Map();
        const tChars = new Map();

        for (let i = 0; i < s.length; i++) {
            sChars.set(s.at(i), (sChars.get(s.at(i)) ?? 0) + 1);
            tChars.set(t.at(i), (tChars.get(t.at(i)) ?? 0) + 1);
        }

        // check if maps are equal

        if (sChars.size !== tChars.size) {
            return false;
        }

        for (const [sKey, sValue] of sChars) {
            if (!tChars.has(sKey)) {
                return false;
            }

            if (tChars.get(sKey) !== sValue) {
                return false;
            }
        }

        return true;
    }
}
