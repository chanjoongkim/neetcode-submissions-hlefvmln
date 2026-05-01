class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        if (!s) {
            return true;
        }

        let leftsStack = [];
        let wildsStack = [];

        for (let i = 0; i < s.length; i++) {
            // add index to leftsStack if left parenthesis
            // or add index to wildsStack if wild card
            // if right parenthesis, we try to pop from leftsStack first, then pop from wildsStack (greedily)
            const c = s.at(i);
            if (c === '(') {
                leftsStack.push(i);
            } else if (c === ')') {
                if (leftsStack.length > 0) {
                    leftsStack.pop();
                } else if (wildsStack.length > 0) {
                    wildsStack.pop();
                } else {
                    // if both stacks are empty then invalid
                    return false;
                }
            } else if (c === '*') {
                wildsStack.push(i);
            }
        }

        // at the end, iterate through all remaining left parenthesis
        // and ensure that there is a corresponding wildcard that is later than the left parenthesis index
        while (leftsStack.length > 0) {
            if (wildsStack.length === 0) {
                return false;
            }

            const left = leftsStack.pop();
            const wild = wildsStack.pop();

            if (left > wild) {
                return false;
            }
        }

        return true;
    }
}
