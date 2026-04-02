class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (!nums) {
            return -1;
        }

        // iterative:
        let left = 0;
        let right = nums.length - 1;

        // need to include equal to allow for range of 1 index case
        while (left <= right) {
            const index = Math.trunc((left + right) / 2);
            const val = nums[index];

            if (val === target) {
                return index;
            } else if (target < val) {
                right = index - 1;
            } else {
                left = index + 1;
            }
        }

        return -1;
    }
}
