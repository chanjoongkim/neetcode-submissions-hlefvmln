class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const memo = new Map();

        return this.dfs(word1, 0, word2, 0, memo);
    }
    
    dfs(word1, w1, word2, w2, memo) {
        if (w1 >= word1.length && w2 >= word2.length) {
            return 0;
        } else if (w1 >= word1.length) {
            return word2.length - w2;
        } else if (w2 >= word2.length) {
            return word1.length - w1;
        }

        const key = w1 + '-' + w2;
        if (memo.has(key)) {
            return memo.get(key);
        }

        if (word1.charAt(w1) === word2.charAt(w2)) {
            const result = this.dfs(word1, w1 + 1, word2, w2 + 1, memo);
            memo.set(key, result);
            return result;
        }

        let result = Number.MAX_SAFE_INTEGER;
        // insert
        result = Math.min(result, this.dfs(word1, w1, word2, w2 + 1, memo));
        // delete
        result = Math.min(result, this.dfs(word1, w1 + 1, word2, w2, memo));
        // replace
        result = Math.min(result, this.dfs(word1, w1 + 1, word2, w2 + 1, memo));

        // count the operation
        result++;

        memo.set(key, result);
        return result;
    }
}
