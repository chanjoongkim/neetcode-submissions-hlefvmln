class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const subset = [];

        this.subsetsHelper(nums, 0, subset, result);

        return result;
    }

    subsetsHelper(nums, index, subset, result) {
        if (index >= nums.length) {
            result.push([...subset]);
            return;
        }

        // skip element
        this.subsetsHelper(nums, index + 1, subset, result);

        // include element
        subset.push(nums[index]);
        this.subsetsHelper(nums, index + 1, subset, result);
        subset.pop();
    }
}
