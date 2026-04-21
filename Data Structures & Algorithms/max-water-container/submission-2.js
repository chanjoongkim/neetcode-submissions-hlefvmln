class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if (!heights) {
            return 0;
        }

        let result = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const minHeight = Math.min(heights[left], heights[right]);
            result = Math.max(result, (right - left) * minHeight);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return result;
    }
}
