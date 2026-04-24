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

        // O(N * 2^N), since we iterate through the array once
        // and at each index we do 2 options
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
