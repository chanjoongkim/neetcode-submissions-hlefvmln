class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const result = [];
        const curr = [];

        this.backtrack(s, wordDict, curr, result);

        return result;
    }

    backtrack(s, wordDict, curr, result) {
        if (s.length === 0) {
            result.push(curr.join(' '));
            return;
        }

        // const sub = s.substring(index);
        for (const word of wordDict) {
            if (s.startsWith(word)) {
                curr.push(word);
                this.backtrack(s.substring(word.length), wordDict, curr, result);
                curr.pop();
            }
        }
    }
}
