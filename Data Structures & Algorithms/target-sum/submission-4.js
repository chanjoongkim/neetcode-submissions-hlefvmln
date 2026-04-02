class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const memo = {};
        return this.dfs(nums, target, 0, memo);
    }

    dfs(nums, target, i, memo) {
        if (i >= nums.length) {
            return target === 0 ? 1 : 0;
        }
        const key = i + '-' + target;

        if (memo[key]) {
            return memo[key];
        }

        const result = this.dfs(nums, target + nums[i], i + 1, memo) + this.dfs(nums, target - nums[i], i + 1, memo);
        memo[key] = result;
        return result;
    }
}
