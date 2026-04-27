class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height) {
            return 0;
        }

        const leftToRight = new Array(height.length).fill(0);
        const rightToLeft = new Array(height.length).fill(0);

        let maxHeight = 0;
        for (let i = 0; i < height.length; i++) {
            maxHeight = Math.max(maxHeight, height[i]);
            leftToRight[i] = maxHeight;
        }

        maxHeight = 0;
        for (let i = height.length - 1; i >= 0; i--) {
            maxHeight = Math.max(maxHeight, height[i]);
            rightToLeft[i] = maxHeight;
        }

        // algorithm:
        // go through heights, and at each i
        // get the minHeight of leftToRight and rightToLeft
        // then subtract current heights value and accumulate values

        let result = 0;
        for (let i = 0; i < height.length; i++) {
            const minMaxHeight = Math.min(leftToRight[i], rightToLeft[i]);
            result += minMaxHeight - height[i];
        }

        return result;
    }
}
