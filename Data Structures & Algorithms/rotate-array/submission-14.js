class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const temp = [...nums];

        for (let i = 0; i < nums.length; i++) {
            // const newIndex = i + (k % nums.length);
            const newIndex = (i + (k % nums.length)) % nums.length;
            nums[newIndex] = temp[i];
        }
    }
}
