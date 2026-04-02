class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let targetSum = 0;

        for (const num of nums) {
            targetSum += num;
        }

        if (targetSum % 2 !== 0) {
            return false;
        }

        targetSum /= 2;

        const memo = {};

        return this.dp(nums, 0, targetSum, memo);
    }

    dp(nums, i, target, memo) {
        if (target === 0) {
            return true;
        }
        if (i >= nums.length) {
            return false;
        }
        const key = i + '-' + target;
        if (memo[key]) {
            return memo[key];
        }

        const result = this.dp(nums, i + 1, target, memo) || this.dp(nums, i + 1, target - nums[i], memo);
        memo[key] = result;
        return result;
    }
}
