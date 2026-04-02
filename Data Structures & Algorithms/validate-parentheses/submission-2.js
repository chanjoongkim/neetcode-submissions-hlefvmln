class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (!s) {
            return true;
        }

        const stack = [];

        for (const c of s) {
            console.log(c);
            if (c === '(' || c === '[' || c === '{') {
                stack.push(c);
            } else {
                if (c === ')') {
                    if (stack.length === 0 || stack[stack.length - 1] !== '(') {
                        return false;
                    }
                    stack.pop();
                } else if (c === ']') {
                    if (stack.length === 0 || stack[stack.length - 1] !== '[') {
                        return false;
                    }
                    stack.pop();
                } else {
                    if (stack.length === 0 || stack[stack.length - 1] !== '{') {
                        return false;
                    }
                    stack.pop();
                }
            }
        }

        console.log('stack', stack);
        return stack.length === 0;
    }
}
