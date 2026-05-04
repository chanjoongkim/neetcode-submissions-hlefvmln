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

    dfs(word1, i1, word2, i2, memo) {
        if (i1 >= word1.length && i2 >= word2.length) {
            return 0;
        }
        // if we ran out of word1, then return remaining characters in word2 (since we could add them all)
        else if (i1 >= word1.length) {
            return (word2.length - i2);
        }
        // if we ran out of word2, then return remaining characters in word1 (since we could delete them all) 
        else if (i2 >= word2.length) {
            return (word1.length - i1);
        }
        
        const key = i1 + '-' + i2;
        if (memo.has(key)) {
            return memo.get(key);
        }

        if (word1.at(i1) === word2.at(i2)) {
            return this.dfs(word1, i1 + 1, word2, i2 + 1, memo);
        }

        let result = Number.MAX_SAFE_INTEGER;
        // try inserting
        result = Math.min(result, 1 + this.dfs(word1, i1, word2, i2 + 1, memo));

        // try deleting
        result = Math.min(result, 1 + this.dfs(word1, i1 + 1, word2, i2, memo));

        // try replacing
        result = Math.min(result, 1 + this.dfs(word1, i1 + 1, word2, i2 + 1, memo));

        memo.set(key, result);

        return result;
    }
}
