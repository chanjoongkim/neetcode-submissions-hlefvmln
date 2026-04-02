class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        if (!heights) {
            return 0;
        }

        const stack = [];
        let maxArea = 0;
        for (let i = 0; i < heights.length; i++) {
            const currHeight = heights[i];

            // if stack is empty, then just push current height
            if (stack.length === 0) {
                stack.push([currHeight, i]);
            } else {
                // if currHeight is greater than top of stack, then we push to stack with curr height and index
                if (currHeight > stack[stack.length - 1][0]) {
                    stack.push([currHeight, i]);
                } else {
                    let lastOldIndex = i;
                    while (stack.length !== 0 && currHeight <= stack[stack.length - 1][0]) {
                        const oldTop = stack.pop();
                        // check if using old height and index (up to current i) would have been max
                        maxArea = Math.max(maxArea, oldTop[0] * (i - oldTop[1]));
                        lastOldIndex = oldTop[1];
                    }

                    stack.push([currHeight, lastOldIndex]);
                }
            }
        }

        // check remaining stack values
        while (stack.length !== 0) {
            const oldTop = stack.pop();
            // don't need +1 because (heights.length - 1) - (oldTop[1] + 1) == (heights.length - oldTop[1])
            maxArea = Math.max(maxArea, oldTop[0] * (heights.length - oldTop[1]));
        }

        return maxArea;
    }
}
