class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sChars = {};

        for (const char of s) {
            sChars[char] = sChars[char] ? sChars[char] + 1 : 1;
        }

        const tChars = {};
        for (const char of t) {
            tChars[char] = tChars[char] ? tChars[char] + 1 : 1;
        }

        for (const char in sChars) {
            console.log('tChars start of loop', tChars);
            // t doesn't contain char of s or we already used up all of t's instances of char
            if (!tChars[char] || tChars[char] === 0) {
                console.log('char', char);
                console.log('tChars', tChars);
                return false;
            }

            tChars[char] = tChars[char] - sChars[char];
            console.log('tChars end of loop', tChars);
        }

        console.log('tChars end', tChars);
        for (const char in tChars) {
            // iterate through the t's remaining chars, and if we have any non-zero counts then that means t had extra instances of that char compared to s
            if (tChars[char] !== 0) {
                return false;
            }
        }

        return true;
    }
}
