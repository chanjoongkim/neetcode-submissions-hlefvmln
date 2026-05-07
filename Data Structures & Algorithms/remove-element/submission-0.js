class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // have an index at the end
        // as we find val, swap the lastIndex with val index
        // decrement lastIndex

        let count = 0;
        for (const num of nums) {
            if (num === val) {
                count++;
            }
        }

        let swapIndex = nums.length - 1;
        while (swapIndex >= 0 && nums[swapIndex] === val) {
            swapIndex--;
        }

        let result = 0;
        for (let i = 0; i < swapIndex; i++) {
            console.log(i, swapIndex);
            if (nums[i] === val) {
                nums[i] = nums[swapIndex];
                nums[swapIndex] = val;
                result++;
                swapIndex--;
                while (swapIndex >= 0 && nums[swapIndex] === val) {
                    result++;
                    swapIndex--;
                }
            }
        }

        console.log(nums);

        return nums.length - count;
    }
}
