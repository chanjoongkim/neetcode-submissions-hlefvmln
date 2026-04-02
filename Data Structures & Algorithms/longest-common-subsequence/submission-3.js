class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memo = {};
        return this.dfs(text1, 0, text2, 0, memo);
    }

    dfs(text1, i1, text2, i2, memo) {
        if (i1 >= text1.length || i2 >= text2.length) {
            return 0;
        }

        const key = i1 + '-' + i2;
        if (memo[key]) {
            return memo[key];
        }

        if (text1.charAt(i1) === text2.charAt(i2)) {
            const result = 1 + this.dfs(text1, i1 + 1, text2, i2 + 1, memo);
            memo[key] = result;
            return result;
        }

        const result = Math.max(this.dfs(text1, i1, text2, i2 + 1, memo), this.dfs(text1, i1 + 1, text2, i2, memo));
        memo[key] = result;
        return result;
    } 
}
