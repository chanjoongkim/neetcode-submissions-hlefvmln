class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const memo = {};
        return this.numDistinctHelper(s, 0, t, 0, memo);
    }

    numDistinctHelper(s, indexS, t, indexT, memo) {
        if (indexT >= t.length) {
            return 1;
        }

        if (indexS >= s.length) {
            return 0;
        }

        const key = indexS + '-' + indexT;

        if (key in memo) {
            return memo[key];
        }

        // at each index, advance indices if we match
        let result = 0;
        if (s.at(indexS) === t.at(indexT)) {
            result += this.numDistinctHelper(s, indexS + 1, t, indexT + 1, memo);
        }

        result += this.numDistinctHelper(s, indexS + 1, t, indexT, memo);

        memo[key] = result;

        return result;
    }
}
