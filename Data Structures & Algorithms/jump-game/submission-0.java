class Solution {
    public boolean canJump(int[] nums) {
        return dfs(nums, 0);
    }

    private boolean dfs(int[] nums, int i) {
        if (i >= nums.length - 1) {
            return true;
        }

        int jumps = nums[i];
        for (int j = 1; j <= jumps; j++) {
            if (dfs(nums, i + j)) {
                return true;
            }
        }

        return false;
    }
}
