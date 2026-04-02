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

        // // iterative:
        // let left = 0;
        // let right = nums.length - 1;

        // // need to include equal to allow for range of 1 index case
        // while (left <= right) {
        //     const index = Math.trunc((left + right) / 2);
        //     const val = nums[index];

        //     if (val === target) {
        //         return index;
        //     } else if (target < val) {
        //         right = index - 1;
        //     } else {
        //         left = index + 1;
        //     }
        // }

        // return -1;

        // recursive
        return this.binarySearchRecursive(nums, 0, nums.length - 1, target);
    }

    binarySearchRecursive(nums, start, end, target) {
        if (start > end) {
            return -1;
        }

        const index = Math.trunc((start + end) / 2);
        const val = nums[index];

        if (val === target) {
            return index;
        } else if (target < val) {
            return this.binarySearchRecursive(nums, start, index - 1, target);
        } else {
            return this.binarySearchRecursive(nums, index + 1, end, target);
        }
    }
}
