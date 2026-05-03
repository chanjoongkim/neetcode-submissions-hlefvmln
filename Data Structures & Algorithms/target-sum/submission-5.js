class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        return this.dfs(nums, 0, target);
    }

    dfs(nums, index, target) {
        if (index >= nums.length) {
            return target === 0 ? 1 : 0;
        }

        let result = 0;

        result += this.dfs(nums, index + 1, target - nums[index]);
        result += this.dfs(nums, index + 1, target + nums[index]);

        return result;
    }
}
