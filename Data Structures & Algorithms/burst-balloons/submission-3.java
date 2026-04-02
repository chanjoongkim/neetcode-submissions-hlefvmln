class Solution {
    public int maxCoins(int[] nums) {
        int[] newNums = new int[nums.length + 2];
        newNums[0] = 1;
        newNums[nums.length + 1] = 1;

        for (int i = 0; i < nums.length; i++) {
            newNums[i + 1] = nums[i];
        }

        return maxCoinsHelper(newNums, 1, nums.length);
    }

    private int maxCoinsHelper(int[] nums, int left, int right) {
        if (left > right) {
            return 0;
        }

        int max = 0;
        for (int i = left; i <= right; i++) {
            // iterate through each spot, and see if we find the max
            int currCoins = nums[left - 1] * nums[i] * nums[right + 1];
            max = Math.max(max, currCoins + maxCoinsHelper(nums, left, i - 1) + maxCoinsHelper(nums, i + 1, right));
        }

        return max;
    }
}
