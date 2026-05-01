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
            // if rights > lefts (excluding wildcards), then invalid
            const c = s.at(i);
            if (c === '(') {
                leftsStack.push(i);
            } else if (c === ')') {
                if (leftsStack.length > 0) {
                    leftsStack.pop();
                } else if (wildsStack.length > 0) {
                    wildsStack.pop();
                } else {
                    console.log('?');
                    return false;
                }
            } else if (c === '*') {
                wildsStack.push(i);
            }

            // if (Math.abs(wildsStack.length - leftsStack.length) < 0) {
            //     return false;
            // }
        }

        console.log(leftsStack, wildsStack);

        // at the end, if lefts !== rights (excluding wildcards), then invalid
        while (leftsStack.length > 0) {
            if (wildsStack.length === 0) {
                return false;
            }

            const left = leftsStack.pop();
            const wild = wildsStack.pop();

            if (left > wild) {
                console.log(left, wild);
                return false;
            }
        }

        return true;
    }
}
