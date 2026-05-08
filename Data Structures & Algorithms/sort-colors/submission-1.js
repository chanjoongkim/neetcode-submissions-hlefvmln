class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let zeroIndex = 0;
        let twoIndex = nums.length - 1;

        let index = 0;

        while (index <= twoIndex) {
            const num = nums[index];

            if (num === 0) {
                nums[index] = nums[zeroIndex];
                nums[zeroIndex] = 0;
                zeroIndex++;
                index++;
            }
            else if (num === 2) {
                nums[index] = nums[twoIndex];
                nums[twoIndex] = 2;
                twoIndex--;
            }
            else {
                index++;
            }
        }
    }
}
