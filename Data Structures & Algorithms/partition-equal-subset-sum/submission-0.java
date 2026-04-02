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

        // try to build an array where the sum is targetSum
        return canReachTarget(nums, 0, targetSum);
    }

    private boolean canReachTarget(int[] nums, int i, int target) {
        if (target == 0) {
            return true;
        }
        if (i >= nums.length) {
            return false;
        }

        // see if we can reach the target by either using nums[i] or skipping it
        return (canReachTarget(nums, i + 1, target) || canReachTarget(nums, i + 1, target - nums[i]));
    }
}
