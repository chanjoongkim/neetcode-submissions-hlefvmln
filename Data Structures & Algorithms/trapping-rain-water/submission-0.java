class Solution {
    public int trap(int[] height) {
        if (height == null || height.length == 0) {
            return 0;
        }

        int[] leftHeights = new int[height.length];
        int[] rightHeights = new int[height.length];

        int maxLeftHeight = 0;
        for (int i = 0; i < height.length; i++) {
            int currentHeight = height[i];
            maxLeftHeight = Math.max(maxLeftHeight, currentHeight);
            leftHeights[i] = maxLeftHeight;
        }

        int maxRightHeight = 0;
        for (int i = height.length - 1; i >= 0; i--) {
            int currentHeight = height[i];
            maxRightHeight = Math.max(maxRightHeight, currentHeight);
            rightHeights[i] = maxRightHeight;
        }

        int maxArea = 0;
        for (int i = 0; i < height.length; i++) {
            int currentArea = Math.min(leftHeights[i], rightHeights[i]) - height[i];
            maxArea += currentArea;
        }

        return maxArea;
    }
}
