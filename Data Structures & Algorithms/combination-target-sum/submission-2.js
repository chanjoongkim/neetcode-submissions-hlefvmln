class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        if (!nums) {
            return [];
        }
        const curr = [];
        const result = [];

        this.combinationSumHelper(nums, 0, target, 0, curr, result);

        return result;
    }

    combinationSumHelper(nums, index, target, currSum, curr, result) {
        if (currSum === target) {
            result.push([...curr]);
            return;
        }
        if (currSum > target) {
            return;
        }
        if (index >= nums.length) {
            return;
        }

        // at each iteration, we can choose to use the number at index
        // or skip the number at index and recurse

        // skip
        this.combinationSumHelper(nums, index + 1, target, currSum, curr, result);

        // include
        currSum += nums[index];
        curr.push(nums[index]);
        this.combinationSumHelper(nums, index, target, currSum, curr, result);
        currSum -= nums[index];
        curr.pop();
    }
}
