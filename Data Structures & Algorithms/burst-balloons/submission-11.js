class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const newNums = [1, ...nums, 1];

        const memo = new Map();

        // pass in "original" bounds of nums [1 to nums.length (or newNums.length - 2)]
        return this.maxCoinsHelper(newNums, 1, nums.length, memo);
    }

    maxCoinsHelper(nums, left, right, memo) {
        if (left > right) {
            return 0;
        }

        const key = left + '-' + right;

        if (memo.has(key)) {
            return memo.get(key);
        }


        let result = 0;
        for (let i = left; i <= right; i++) {
            // imagine that the current ith coin is the LAST balloon to be popped. If so, then 
            // we get the left - 1 and right + 1 coin values, then recurse down the left/right subarrays
            const currCoins = nums[left - 1] * nums[i] * nums[right + 1];
            result = Math.max(result, currCoins + this.maxCoinsHelper(nums, left, i - 1, memo) + this.maxCoinsHelper(nums, i + 1, right, memo));
        }

        memo.set(key, result);

        return result;
    }
}
