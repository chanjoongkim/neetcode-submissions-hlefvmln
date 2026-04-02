class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = new Array(nums.length).fill(-1);

        return this.robHelper(nums, 0, memo);
    }

    robHelper(nums, i, memo) {
        if (i >= nums.length) {
            return 0;
        } else if (memo[i] !== -1) {
            return memo[i];
        }

        const maxMoney = Math.max(nums[i] + this.robHelper(nums, i + 2, memo), this.robHelper(nums, i + 1, memo));
        memo[i] = maxMoney;
        return maxMoney;
    }
}
