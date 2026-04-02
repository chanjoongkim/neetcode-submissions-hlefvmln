class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height) {
            return 0;
        }

        const leftHeights = new Array(height.length);
        const rightHeights = new Array(height.length);

        let maxLeftHeight = 0;
        for (let i = 0; i < height.length; i++) {
            const currentHeight = height[i];
            maxLeftHeight = Math.max(maxLeftHeight, currentHeight);
            leftHeights[i] = maxLeftHeight;
        }

        let maxRightHeight = 0;
        for (let i = height.length - 1; i >= 0; i--) {
            const currentHeight = height[i];
            maxRightHeight = Math.max(maxRightHeight, currentHeight);
            rightHeights[i] = maxRightHeight;
        }

        let maxArea = 0;
        for (let i = 0; i < height.length; i++) {
            const currentArea = Math.min(leftHeights[i], rightHeights[i]) - height[i];
            maxArea += currentArea;
        }

        return maxArea;
    }
}
