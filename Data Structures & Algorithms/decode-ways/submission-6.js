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

        let curr = 0;
        let ones = 1;
        let twos = 0;

        for (let i = s.length - 1; i >= 0; i--) {
            if (s.charAt(i) == '0') {
                curr = 0;
            } else {
                curr = ones;
                if (i < s.length - 1 && set.has(s.substring(i, i + 2))) {
                    curr += twos;
                }
            }

            
            twos = ones;
            ones = curr;
            curr = 0;
        }

        return ones;
    }
}
