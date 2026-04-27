class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (!nums) {
            return 0;
        }
        if (nums.length < 2) {
            return nums[0];
        }

        const houses = new Array(nums.length).fill(0);

        houses[nums.length - 1] = nums[nums.length - 1];
        houses[nums.length - 2] = nums[nums.length - 2];

        for (let i = nums.length - 3; i >= 0; i--) {
            houses[i] = Math.max(nums[i] + houses[i + 2], houses[i + 1]);
        }

        return Math.max(houses[0], houses[1]);

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
