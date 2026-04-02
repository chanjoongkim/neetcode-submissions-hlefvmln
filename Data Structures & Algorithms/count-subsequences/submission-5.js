class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        const memo = new Map();
        return this.dfs(s, 0, t, 0, memo);
    }

    dfs(s, sI, t, tI, memo) {
        // base case, we ran out of t so we found a valid subsequence
        if (tI >= t.length) {
            return 1;
        }
        // base case, we ran out of s so we didn't find a valid subsequence
        else if (sI >= s.length) {
            return 0;
        }

        const key = sI + '-' + tI;
        if (memo.has(key)) {
            return memo.get(key);
        }

        const skip = this.dfs(s, sI + 1, t, tI, memo);
        let include = 0;
        if (s.charAt(sI) === t.charAt(tI)) {
            include = this.dfs(s, sI + 1, t, tI + 1, memo);
        }

        memo.set(key, skip + include);
        return skip + include;
    }
}
