class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = [];
        const current = "";

        this.generateParenthesisHelper(n, 0, 0, result, current);

        return result;
    }

    generateParenthesisHelper(n, open, closed, result, current) {
        if (n === open && n === closed) {
            // not sure if I need to make a copy or not
            result.push(current);
            return;
        }

        // invalid case
        if (closed > open) {
            return;
        }

        // we must close
        if (n === open) {
            this.generateParenthesisHelper(n, open, closed + 1, result, current + ")");
            return;
        }

        // at each step, we can add an open, and we can close 
        this.generateParenthesisHelper(n, open + 1, closed, result, current + "(");
        this.generateParenthesisHelper(n, open, closed + 1, result, current + ")");
    }
}
