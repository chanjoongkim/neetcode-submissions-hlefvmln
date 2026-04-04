class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * Example: nums = [1, 3, 4, 3]
     * ideal: rob houses 2, 4
     */
    rob(nums) {
        const memo = {};
        return this.robHelper(nums, 0, memo);
    }

    robHelper(nums, index, memo) {
        if (index >= nums.length) {
            return 0;
        } else if (index in memo) {
            return memo[index];
        }

        // either rob the current house and skip the neighbor, or skip the current house and rob next
        const robCurrent = nums[index] + this.robHelper(nums, index + 2, memo);
        const skipCurrent = this.robHelper(nums, index + 1, memo);

        memo[index] = Math.max(robCurrent, skipCurrent);
        return memo[index];
    }
}
