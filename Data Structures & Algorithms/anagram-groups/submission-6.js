class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = [];
        const charsMap = new Map();


        for (const str of strs) {
            // build up chars
            const strChars = this.buildCharFreqs(str);

            // go through result and see if we already have a list containing anagrams that match str
            if (charsMap.has(strChars)) {
                const anagramList = charsMap.get(strChars);
                anagramList.push(str);
                charsMap.get(strChars, anagramList);
            }
            else {
                charsMap.set(strChars, [str]);
            }
        }

        return [...charsMap.values()];
    }

    // by building a string key we allow more efficient lookups
    buildCharFreqs(str) {
        const charFreqs = new Array(26).fill(0);

        for (const c of str) {
            charFreqs[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        const key = charFreqs.join(',');
        return key;
    }

    // inefficient way to check
    charFreqsEqual(sChars, tChars) {
        if (sChars.size !== tChars.size) {
            return false;
        }

        for (const [sKey, sValue] of sChars) {
            if (!tChars.has(sKey) || tChars.get(sKey) !== sValue) {
                return false;
            }
        }

        return true;
    }
}
