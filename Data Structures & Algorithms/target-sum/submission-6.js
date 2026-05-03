class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const memo = {};
        return this.dfs(nums, 0, target, memo);
    }

    dfs(nums, index, target, memo) {
        if (index >= nums.length) {
            return target === 0 ? 1 : 0;
        }

        const key = index + '-' + target;

        if (memo[key]) {
            return memo[key];
        }

        let result = 0;

        result += this.dfs(nums, index + 1, target - nums[index], memo);
        result += this.dfs(nums, index + 1, target + nums[index], memo);

        memo[key] = result;
        return result;
    }
}
