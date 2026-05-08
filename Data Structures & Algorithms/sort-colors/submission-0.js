class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        // 2 pass solution
        // first pass, we count the number of 0s, 1s, and 2s
        // second pass, we update the nums[i] with the number of 0s, 1s and 2s

        let zeros = 0;
        let ones = 0;
        let twos = 0;

        for (const num of nums) {
            if (num === 0) {
                zeros++;
            }
            else if (num === 1) {
                ones++;
            }
            else {
                twos++;
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (zeros > 0) {
                nums[i] = 0;
                zeros--;
            }
            else if (ones > 0) {
                nums[i] = 1;
                ones--;
            }
            else {
                nums[i] = 2;
                twos--;
            }
        }
    }
}
