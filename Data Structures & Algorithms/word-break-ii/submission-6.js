class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const memo = new Map();
        this.backtrack(s, wordDict, memo);

        return memo.get(s).map((r) => r.join(' '));
    }

    backtrack(s, wordDict, memo) {
        if (s.length === 0) {
            // need to return an empty string so we can append it
            return [''];
        }

        if (memo.has(s)) {
            return memo.get(s);
        }

        const result = [];
        for (const word of wordDict) {
            if (s.startsWith(word)) {
                const remain = this.backtrack(s.substring(word.length), wordDict, memo);
                
                // store the current word + all possible answers with remaining substring
                for (const answer of remain) {
                    result.push([word, ...answer]);
                }
            }
        }

        // for each s, store the list of all possible answers with the given s
        memo.set(s, result);
        return result;
    }
}
