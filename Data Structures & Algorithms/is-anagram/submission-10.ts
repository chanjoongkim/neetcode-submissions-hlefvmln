class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const sChars = new Map<string, number>();
        const tChars = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            const sChar = s.charAt(i);
            const tChar = t.charAt(i);

            sChars.set(sChar, (sChars.get(sChar) ?? 0) + 1);
            tChars.set(tChar, (tChars.get(tChar) ?? 0) + 1);
        }

        // compare maps

        // number of keys don't match
        if (sChars.size !== tChars.size) {
            return false;
        }

        for (const [key, value] of sChars) {
            if (!tChars.has(key) || tChars.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}
