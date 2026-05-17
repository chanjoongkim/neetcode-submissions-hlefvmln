class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums, target) {
        // nums.sort((a, b) => a - b);

        const result = [0];
        const memo = new Map();
        return this.backtrack(nums, 0, target, result, memo);
    }

    backtrack(nums, curr, target, result, memo) {
        if (curr === target) {
            return 1;
        }
        if (curr > target) {
            return 0;
        }

        if (memo.has(curr)) {
            return memo.get(curr);
        }

        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            // since nums is sorted, we know that we can no longer create any sums <= target
            // if (curr + nums[i] > target) {
            //     continue;
            // }

            // recursively call.
            // naturally since our for loop starts at 0 every time, we will re-use the index as well as skipping the index
            res += this.backtrack(nums, curr + nums[i], target, result, memo);
        }

        memo.set(curr, res);
        return res;
    }
}
