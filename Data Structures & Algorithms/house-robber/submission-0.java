class Solution {
    public int rob(int[] nums) {
        int[] memo = new int[nums.length];
        for (int i = 0; i < memo.length; i++) {
            memo[i] = -1;
        }
        return robHelper(nums, 0, memo);
    }

    private int robHelper(int[] nums, int i, int[] memo) {
        if (i >= nums.length) {
            return 0;
        } else if (memo[i] != -1) {
            return memo[i];
        }

        // max of rob this house and skip next, or rob next house
        int maxMoney = Math.max(nums[i] + robHelper(nums, i + 2, memo), robHelper(nums, i + 1, memo));

        memo[i] = maxMoney;
        return maxMoney;
    }
}
