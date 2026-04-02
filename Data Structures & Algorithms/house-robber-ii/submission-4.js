class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0];
        }

        const memo1 = new Array(nums.length - 1).fill(-1);
        const memo2 = new Array(nums.length - 1).fill(-1);

        const nums1 = nums.slice(0, nums.length - 1);
        const nums2 = nums.slice(1, nums.length);

        return Math.max(this.robHelper(nums1, 0, memo1), this.robHelper(nums2, 0, memo2));
    }

    robHelper(nums, i, memo) {
        if (i >= nums.length) {
            return 0;
        }
        if (memo[i] !== -1) {
            return memo[i];
        }

        const maxMoney = Math.max(nums[i] + this.robHelper(nums, i + 2, memo), this.robHelper(nums, i + 1, memo));
        memo[i] = maxMoney;
        return maxMoney;
    }
}
