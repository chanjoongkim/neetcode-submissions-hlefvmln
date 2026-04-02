class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        Map<String, Integer> memo = new HashMap<>();
        return dfs(nums, 0, target, memo);
    }

    private int dfs(int[] nums, int i, int target, Map<String, Integer> memo) {
        if (i >= nums.length) {
            if (target == 0) {
                return 1;
            } else {
                return 0;
            }
        }

        String key = i + "-" + target;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }
        int result = dfs(nums, i + 1, target + nums[i], memo) + dfs(nums, i + 1, target - nums[i], memo);

        memo.put(key, result);
        return result;
    }
}
