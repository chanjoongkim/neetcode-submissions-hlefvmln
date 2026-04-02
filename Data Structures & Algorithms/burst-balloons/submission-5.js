class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const memo = new Map();
        const newNums = [1, ...nums, 1];

        return this.dfs(newNums, 1, nums.length, memo);
    }

    dfs(nums, left, right, memo) {
        if (left > right) {
            return 0;
        }

        const key = left + '-' + right;
        if (memo.has(key)) {
            return memo.get(key);
        }

        let max = 0;
        for (let i = left; i <= right; i++) {
            // imagine that the ith coin is the LAST coin taken out of the current range left-right.
            // then recurse with the subarrays
            const currCoins = nums[left - 1] * nums[i] * nums[right + 1];
            max = Math.max(max, currCoins + this.dfs(nums, left, i -1, memo) + this.dfs(nums, i + 1, right, memo));
        }

        memo.set(key, max);

        return max;
    }
}
