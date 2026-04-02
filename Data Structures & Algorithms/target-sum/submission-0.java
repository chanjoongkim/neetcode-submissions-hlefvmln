class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        return dfs(nums, 0, target);
    }

    private int dfs(int[] nums, int i, int target) {
        if (i >= nums.length) {
            if (target == 0) {
                return 1;
            } else {
                return 0;
            }
        }

        return dfs(nums, i + 1, target + nums[i]) + dfs(nums, i + 1, target - nums[i]);
    }
}
