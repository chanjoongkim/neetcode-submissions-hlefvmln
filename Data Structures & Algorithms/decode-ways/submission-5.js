class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const set = new Set();
        for (let i = 1; i <= 26; i++) {
            set.add('' + i);
        }

        const memo = new Array(s.length + 1);
        memo[s.length] = 1;

        for (let i = s.length - 1; i >= 0; i--) {
            if (s.charAt(i) == '0') {
                memo[i] = 0;
                continue;
            }

            const onesResult = memo[i + 1];
            let twosResult = 0;
            if (i < s.length - 1 && set.has(s.substring(i, i + 2))) {
                twosResult = memo[i + 2];
            }

            memo[i] = onesResult + twosResult;
        }

        return memo[0];
    }
}
