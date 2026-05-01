class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memo = new Map();
        if (text1.length < text2.length) {
            return this.helper(text1, text2, 0, 0, memo);
        } else {
            return this.helper(text2, text1, 0, 0, memo);
        }
    }

    helper(text1, text2, index1, index2, memo) {
        if (index1 >= text1.length || index2 >= text2.length) {
            return 0;
        }

        const key = index1 + '-' + index2;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let result = 0;
        for (let i = index1; i < text1.length; i++) {
            if (text1.at(i) === text2.at(index2)) {
                result = Math.max(result, 1 + this.helper(text1, text2, i + 1, index2 + 1, memo));
            } else {
                result = Math.max(result, this.helper(text1, text2, i, index2 + 1, memo));
            }
        }

        memo.set(key, result);

        return result;
    }
}
