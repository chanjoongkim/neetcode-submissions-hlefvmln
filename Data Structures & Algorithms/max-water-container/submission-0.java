class Solution {
    public int maxArea(int[] heights) {
        if (heights == null || heights.length == 0) {
            return 0;
        }

        int maxArea = 0;

        // algorithm:
        // have left and right ptrs
        // compute area, and set new max if applicable
        // greedily move either left or right ptr, depending on whichever one is the shortest
        // this is because we are always maximizing the length (left to right) by starting at the ends, 
        // then also maximizing the height by keeping the longest side and moving the shorter side

        int left = 0;
        int right = heights.length - 1;

        while (left < right) {
            int currentArea = (right - left) * (Math.min(heights[left], heights[right]));
            maxArea = Math.max(maxArea, currentArea);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
}
