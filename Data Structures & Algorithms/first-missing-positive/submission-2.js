class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {

        // step 2 
        // cyclic sort
        // for each nums[i] we encounter, we should set it to the appropriate index
        // nums[nums[i] - 1] = nums[i]
        // but I need to do this in a while loop because we have to now make sure the old value at 
        // nums[nums[i] - 1] is set to the right place

        for (let i = 0; i < nums.length; i++) {
            if (1 <= nums[i] && nums[i] <= nums.length && nums[i] === nums[nums[i] - 1]) {
                continue;
            }

            let index = i;
            while (1 <= nums[index] && nums[index] <= nums.length && nums[index] !== nums[nums[index] - 1]) {
                const temp1 = nums[index];
                const temp2 = nums[index] - 1;
                nums[index] = nums[nums[index] - 1];
                nums[temp2] = temp1;
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== i + 1) {
                return i + 1;
            }
        }

        return nums.length + 1;
    }
}
