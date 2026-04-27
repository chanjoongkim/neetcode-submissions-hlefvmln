class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = new Map();

        return this.robMemo(nums, 0, memo);
    }

    robMemo(nums, i, memo) {
        if (memo.has(i)) {
            return memo.get(i);
        }
        if (i >= nums.length) {
            return 0;
        }

        const max = Math.max(nums[i] + this.robMemo(nums, i + 2, memo), this.robMemo(nums, i + 1, memo));
        memo.set(i, max);

        return max;
    }
}
