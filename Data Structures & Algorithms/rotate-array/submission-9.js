class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const newIndices = new Map();
        for (let i = 0; i < nums.length; i++) {
            newIndices.set(i, i + (k % nums.length));
        }

        console.log(newIndices);

        const temp = [...nums];

        for (let i = 0; i < nums.length; i++) {
            const newIndex = newIndices.get(i) % nums.length;
            nums[newIndex] = temp[i];
        }
    }
}
