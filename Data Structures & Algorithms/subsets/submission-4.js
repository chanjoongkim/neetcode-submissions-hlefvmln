class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        if (!nums) {
            return [];
        }

        const result = [];
        const curr = [];

        this.subsetsHelper(nums, 0, result, curr);

        return result;
    }

    subsetsHelper(nums, index, result, curr) {
        if (index >= nums.length) {
            result.push([...curr]);
            return;
        }

        // at each index, recurse where we skip the element at the index
        // and recurse where we include the element at the index

        // skip
        this.subsetsHelper(nums, index + 1, result, curr);

        curr.push(nums[index]);
        this.subsetsHelper(nums, index + 1, result, curr);
        // remove the nums[index] we added to avoid it always being included in future calls
        curr.pop();
    }
}
