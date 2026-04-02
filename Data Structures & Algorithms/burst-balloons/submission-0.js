class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        return this.dfs(nums);
    }

    dfs(nums) {
        if (!nums) {
            return 0;
        }

        // for each index in our given nums array (which will be modified), find the max if we pop that value and recurse
        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            const coinsFromI = this.computeCoins(nums, i);
            const newNums = [...nums.slice(0, i), ...nums.slice(i + 1)];
            max = Math.max(max, coinsFromI + this.dfs(newNums));
        }

        return max;
    }

    computeCoins(nums, i) {
        let left = 1;
        if (i - 1 >= 0) {
            left = nums[i - 1];
        }
        let right = 1;
        if (i + 1 < nums.length) {
            right = nums[i + 1];
        }

        return left * nums[i] * right;
    }
}
