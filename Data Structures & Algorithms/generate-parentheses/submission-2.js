class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];

        this.backtrack(n, 0, 0, '', result);

        return result;
    }

    backtrack(n, open, closed, curr, result) {
        // no more parantheses can be used
        if (open === closed && open === n) {
            result.push(curr);
            return;
        }

        // at each step, either add an open paranthesis
        // or closed a paranthesis pair

        // add paranthesis
        if (open < n) {
            this.backtrack(n, open + 1, closed, curr + '(', result);
        }

        if (open > closed) {
            this.backtrack(n, open, closed + 1, curr += ')', result);
        }
    }
}
