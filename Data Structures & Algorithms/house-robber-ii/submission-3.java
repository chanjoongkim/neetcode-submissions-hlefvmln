class Solution {
    public int rob(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }

        int[] memo1 = new int[nums.length];
        int[] memo2 = new int[nums.length];
        for (int i = 0; i < memo1.length; i++) {
            memo1[i] = -1;
            memo2[i] = -1;
        }
        return Math.max(robHelper(nums, 0, memo1, true), robHelper(nums, 1, memo2, false));
    }

    private int robHelper(int[] nums, int i, int[] memo, boolean robbedFirstHouse) {
        if (i >= nums.length) {
            return 0;
        }

        // if we're at the last house, we can only rob if robbedFirstHouse = false
        if (i == nums.length - 1) {
            if (robbedFirstHouse) {
                return 0;
            } else {
                return nums[i];
            }
        }

        if (memo[i] != -1) {
            return memo[i];
        }

        int maxMoney = Math.max(nums[i] + robHelper(nums, i + 2, memo, robbedFirstHouse), robHelper(nums, i + 1, memo, robbedFirstHouse));
        memo[i] = maxMoney;
        return maxMoney;
    }
}
