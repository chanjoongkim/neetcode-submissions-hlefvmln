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
            // we only increment i when we know nums[i] !== val
            // because we need to check if the number we just swapped is also val
            else {
                i++;
            }
        }

        return n;
    }
}
