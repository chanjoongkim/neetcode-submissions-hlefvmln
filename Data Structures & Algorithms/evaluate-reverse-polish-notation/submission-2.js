class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if (!tokens) {
            return 0;
        }

        const stack = [];

        for (const token of tokens) {
            if (token === '+' || token === '-' || token === '*' || token === '/') {
                const second = stack.pop();
                const first = stack.pop();
                if (token === '+') {    
                    stack.push(first + second);
                } else if (token === '*') {
                    stack.push(first * second);
                } else if (token === '-') {
                    stack.push(first - second);
                } else {
                    stack.push(Math.trunc(first / second));
                }
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}
