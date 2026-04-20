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
            const strChars = new Map();
            for (const c of str) {
                strChars.set(c, (strChars.get(c) ?? 0) + 1);
            }

            // go through result and see if we already have a list containing anagrams that match str
            let found = false;
            for (const words of result) {
                if (this.charFreqsEqual(strChars, charsMap.get(words[0]))) {
                    words.push(str);
                    found = true;
                }
            }

            if (!found) {
                result.push([str]);
                charsMap.set(str, strChars);
            }
        }

        return result;
    }

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
