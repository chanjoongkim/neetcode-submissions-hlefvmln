class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramLists = {};
        for (const str of strs) {
            const strCharFreqs = this.buildCharFreqs(str);

            // check is strCharFreqs matches a key of anagramLists
            if (strCharFreqs in anagramLists) {
                const anagramList = anagramLists[strCharFreqs];
                anagramList.push(str);
                anagramLists[strCharFreqs] = anagramList;
            } else {
                const anagramList = [str];
                anagramLists[strCharFreqs] = anagramList;
            }
        }

        return Object.values(anagramLists);
    }

    // array based char freqs
    buildCharFreqs(str) {
        // fill new array with 26 indices, all 0 value
        const charFreqs = new Array(26).fill(0);

        for (const c of str) {
            charFreqs[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        // convert array to String to set as keys
        const key = charFreqs.join(',');
        return key;
    }

    // object based char freqs
    // buildCharFreqs(str) {
    //     const charFreqs = {};

    //     for (const c of str) {
    //         charFreqs[c] = charFreqs[c] ? charFreqs[c] + 1 : 1;
    //     }

    //     return charFreqs;
    // }
}
