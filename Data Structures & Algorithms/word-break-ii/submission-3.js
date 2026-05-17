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

        console.log(memo);

        const res = memo.get(s);

        for (const r of res) {
            result.push(r.join(' '));
        }

        return result;
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
                console.log(s, remain);
                
                
                // console.log('curr', curr);
                for (const answer of remain) {
                    console.log(answer);
                    result.push([word, ...answer]);
                }
            }
        }

        console.log('result', result);

        memo.set(s, result);
        return result;
    }
}
