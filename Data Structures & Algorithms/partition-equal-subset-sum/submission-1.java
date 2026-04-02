class Solution {
    public boolean canPartition(int[] nums) {
        int totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }
        
        if (totalSum % 2 != 0) {
            return false;
        }

        int targetSum = totalSum / 2;

        Map<String, Boolean> memo = new HashMap<>();

        // try to build an array where the sum is targetSum
        return canReachTarget(nums, 0, targetSum, memo);
    }

    private boolean canReachTarget(int[] nums, int i, int target, Map<String, Boolean> memo) {
        if (target == 0) {
            return true;
        }
        if (i >= nums.length) {
            return false;
        }
        String key = i + "-" + target;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        // see if we can reach the target by either using nums[i] or skipping it
        boolean result = (canReachTarget(nums, i + 1, target, memo) || canReachTarget(nums, i + 1, target - nums[i], memo));
        memo.put(key, result);

        return result;
    }
}
