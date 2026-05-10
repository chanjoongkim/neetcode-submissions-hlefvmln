class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        // use a stack
        // add to stack whenever we have a new score to record (like an integer)
        // or when we have a D (to double)
        // pop whenever we have C or when we need to + 

        const stack = [];

        for (const op of operations) {
            // get the last 2 numbers from our stack and add the sum
            if (op === '+') {
                const num1 = stack.at(-2);
                const num2 = stack.at(-1);
                stack.push(num1 + num2);
            }
            else if (op === 'D') {
                stack.push(2 * stack.at(-1));
            }
            else if (op === 'C') {
                stack.pop();
            }
            // must be integer
            else {
                stack.push(Number(op));
            }
        }

        return stack.reduce((acc, curr) => acc + curr, 0);
    }
}
