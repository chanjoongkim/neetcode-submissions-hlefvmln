class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort();
        const result = [];
        const current = [];

        this.subsetsWithDupHelper(nums, 0, current, result);

        return result;
    }

    subsetsWithDupHelper(nums, index, current, result) {
        if (index >= nums.length) {
            result.push([...current]); 
            return;
        }

        current.push(nums[index]);
        this.subsetsWithDupHelper(nums, index + 1, current, result);
        current.pop();

        while (index < nums.length - 1 && nums[index] === nums[index + 1]) {
            index++;
        }
        this.subsetsWithDupHelper(nums, index + 1, current, result);
    }
}
