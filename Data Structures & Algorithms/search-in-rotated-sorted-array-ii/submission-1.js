class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        return this.binarySearch(nums, target, 0, nums.length - 1);
    }

    binarySearch(nums, target, l, r) {
        if (l > r) {
            return false;
        }
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            return true;
        }

        // are we in the sorted portion or not?

        // we're in a rotated portion
        if (nums[mid] <= nums[r]) {
            return this.binarySearch(nums, target, l, mid - 1) || this.binarySearch(nums, target, mid + 1, r);
        }
        // we're in a normal sorted portion
        else {
            if (nums[mid] < target) {
                while (mid >= 1 && nums[mid] === nums[mid - 1]) {
                    mid--;
                }
                return this.binarySearch(nums, target, l, mid - 1);
            }
            else {
                while (mid < nums.length - 1 && nums[mid] === nums[mid + 1]) {
                    mid++;
                }
                return this.binarySearch(nums, target, mid + 1, r);
            }
        }
    }
}
