class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        if (!nums) {
            return [];
        }

        nums.sort((a, b) => a - b);

        const result = [];
        const curr = [];

        this.subsetsWithDupHelper(nums, 0, curr, result);

        return result;
    }

    subsetsWithDupHelper(nums, index, curr, result) {
        if (index >= nums.length) {
            result.push([...curr]);
            return;
        }

        // use element and recurse
        curr.push(nums[index]);
        this.subsetsWithDupHelper(nums, index + 1, curr, result);
        curr.pop();

        // skip element (including duplicates)
        while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
            index++;
        }

        this.subsetsWithDupHelper(nums, index + 1, curr, result);
    }
}
