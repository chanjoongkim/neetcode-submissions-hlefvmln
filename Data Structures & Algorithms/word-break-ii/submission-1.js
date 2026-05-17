class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const result = [];
        const curr = [];

        this.backtrack(s, 0, wordDict, curr, result);

        return result;
    }

    backtrack(s, index, wordDict, curr, result) {
        if (index >= s.length) {
            result.push(curr.join(' '));
            return;
        }

        const sub = s.substring(index);
        for (const word of wordDict) {
            if (sub.startsWith(word)) {
                curr.push(word);
                this.backtrack(s, index + word.length, wordDict, curr, result);
                curr.pop();
            }
        }
    }
}
