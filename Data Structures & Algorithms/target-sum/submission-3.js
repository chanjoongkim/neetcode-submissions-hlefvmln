class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        return this.dfs(nums, target, 0);
    }

    dfs(nums, target, i) {
        if (i >= nums.length) {
            return target === 0 ? 1 : 0;
        }

        return this.dfs(nums, target + nums[i], i + 1) + this.dfs(nums, target - nums[i], i + 1);
    }
}
