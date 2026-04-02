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

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.trunc((left + right) / 2);
            const val = nums[mid];

            if (val === target) {
                return mid;
            }
            // is mid in the left sorted array or right sorted array?
            // if nums[left] < val, then mid is in the left sorted array
            else if (nums[left] <= val) {
                // check if target is greater than mid
                // if so, then we must go right
                if (val < target) {
                    left = mid + 1;
                }
                // else, then target < mid.
                // so we need to check the left-most value. If target is less than left,
                // we need to go right because it will be in the rotated array to the right
                else if (target < nums[left]) {
                    left = mid + 1;
                } 
                else {
                    right = mid - 1;
                }
            }
            // mid is in the right sorted array
            else {
                // if target is less than mid, we must go left
                if (val > target) {
                    right = mid - 1;
                }
                // else, target >= val.
                // so we need to check the right-most value. If target is greater than right,
                // we need to go left and check the rotated array to the left
                else if (target > nums[right]) {
                    right = mid - 1;
                }
                else {
                    left = mid + 1;
                }
            }
        }

        return -1;
    }
}
