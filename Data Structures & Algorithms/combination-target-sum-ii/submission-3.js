class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort();

        const result = [];
        const current = [];

        this.combinationSum2Helper(candidates, 0, target, result, current);

        return result;
    }

    combinationSum2Helper(nums, index, target, result, current) {
        if (target === 0) {
            result.push([...current]);
            return;
        }

        if (target < 0 || index >= nums.length) {
            return;
        }

        // include element and recurse
        current.push(nums[index]);
        this.combinationSum2Helper(nums, index + 1, target - nums[index], result, current);
        current.pop();

        // skip this element and recurse
        // but we must skip all values of nums[index] to avoid duplicate combinations
        while (index < nums.length - 1 && nums[index] === nums[index + 1]) {
            index++;
        }
        this.combinationSum2Helper(nums, index + 1, target, result, current);
    }
}
