class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0;
        // n is length of nums we have at the end (nums without val basically)
        let n = nums.length;

        while (i < n) {
            if (nums[i] === val) {
                nums[i] = nums[n - 1];
                n--;
            }
            else {
                i++;
            }
        }

        return n;
    }
}
