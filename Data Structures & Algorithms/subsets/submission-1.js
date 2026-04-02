class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        const current = [];

        this.subsetsHelper(nums, 0, result, current);

        return result;
    }

    subsetsHelper(nums, index, result, current) {
        if (index >= nums.length) {
            // add a shallow copy of current
            result.push([...current]);
            return;
        }

        // at each index, either add element to current and recurse
        // or skip element and recurse

        // skip
        this.subsetsHelper(nums, index + 1, result, current);

        current.push(nums[index]);

        this.subsetsHelper(nums, index + 1, result, current);

        current.pop();
    }
}
