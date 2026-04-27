class Solution {
    /**
     * @param {string} s
     * @return {number}
     * 
     * ex: "12"
     * 
     * index: 0
     *   - index: 1
     *     - index: 2 (returns 1)
     *     returns 1
     *   
     */
    numDecodings(s) {
        const mappings = new Map();

        for (let i = 1; i <= 26; i++) {
            mappings.set(String(i), String.fromCharCode(64 + i));
        }

        const memo = new Map();

        return this.numDecodingsHelper(s, 0, mappings, memo);
    }

    numDecodingsHelper(s, index, mappings, memo) {
        // found a valid decoding
        if (index >= s.length) {
            return 1;
        }

        if (memo.has(index)) {
            return memo.get(index);
        }

        // can't have a leading zero
        if (s.at(index) === '0') {
            return 0;
        }

        // get all outcomes using single char
        let result = this.numDecodingsHelper(s, index + 1, mappings, memo);

        if (index + 1 < s.length) {
            const twoDigits = s.substring(index, index + 2);
            if (mappings.has(twoDigits)) {
                result += this.numDecodingsHelper(s, index + 2, mappings, memo);
            }
        }

        memo.set(index, result);

        return result;
    }
}
