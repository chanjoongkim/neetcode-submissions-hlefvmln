class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = new Map();

        return this.wordBreakMemo(s, wordDict, memo);
    }

    wordBreakMemo(s, wordDict, memo) {
        if (!s) {
            return true;
        }

        if (memo.has(s)) {
            return memo.get(s);
        }

        for (const word of wordDict) {
            if (s.startsWith(word)) {
                if (this.wordBreakMemo(s.substring(word.length), wordDict, memo)) {
                    memo.set(s, true);
                    return true;
                }
            }
        }

        memo.set(s, false);

        return false;
    }
}
