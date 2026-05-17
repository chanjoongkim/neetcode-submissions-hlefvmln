class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const result = [];
        const memo = new Map();

        this.backtrack(s, wordDict, memo);

        return memo.get(s).map((r) => r.join(' '));
    }

    backtrack(s, wordDict, memo) {
        if (s.length === 0) {
            return [''];
        }

        if (memo.has(s)) {
            return memo.get(s);
        }

        const result = [];
        for (const word of wordDict) {
            if (s.startsWith(word)) {
                const remain = this.backtrack(s.substring(word.length), wordDict, memo);
                
                for (const answer of remain) {
                    result.push([word, ...answer]);
                }
            }
        }

        memo.set(s, result);
        return result;
    }
}
