class Solution {
    public boolean canJump(int[] nums) {
        Map<Integer, Boolean> memo = new HashMap<>();
        return dfs(nums, 0, memo);
    }

    private boolean dfs(int[] nums, int i, Map<Integer, Boolean> memo) {
        if (i >= nums.length - 1) {
            return true;
        }

        if (memo.containsKey(i)) {
            return memo.get(i);
        }

        int jumps = nums[i];
        for (int j = 1; j <= jumps; j++) {
            if (dfs(nums, i + j, memo)) {
                return true;
            }
        }

        memo.put(i, false);

        return false;
    }
}
