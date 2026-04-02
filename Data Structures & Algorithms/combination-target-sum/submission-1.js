class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        const current = [];

        this.combinationSumHelper(nums, 0, target, 0, current, result);

        return result;
    }

    combinationSumHelper(nums, index, target, currentSum, current, result) {
        if (currentSum === target) {
            result.push([...current]);
            return;
        }

        if (currentSum > target || index >= nums.length) {
            return;
        }

        // either use current element and recurse
        // or skip and recurse

        // skip
        this.combinationSumHelper(nums, index + 1, target, currentSum, current, result);

        // include
        current.push(nums[index]);
        // don't increment the index because we may re-use nums[index] again.
        // since at each call we skip or include, we will not get stuck using nums[index] over and over
        this.combinationSumHelper(nums, index, target, currentSum + nums[index], current, result);
        current.pop();
    }
}
