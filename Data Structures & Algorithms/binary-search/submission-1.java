class Solution {
    public int search(int[] nums, int target) {
        if (nums == null || nums.length == 0) {
            return -1;
        }

        // algorithm:
        // check middle of array. if value == target, return index
        // else, if value < target, iterate left side
        // else if value > target, iterate right side

        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int index = (left + right) / 2;
            int val = nums[index];
            if (val == target) {
                return index;
            } else if (target < val) {
                right = index - 1;
            } else {
                left = index + 1;
            }
        }

        return -1;

        // return binarySearchRecursive(nums, 0, nums.length - 1, target);
    }

    // recursive option
    private int binarySearchRecursive(int[] nums, int start, int end, int target) {
        // base case, indices are out of bound so return -1
        if (start >= nums.length || end < 0 || start > end) {
            return -1;
        }

        int index = (start + end) / 2;
        int val = nums[index];

        if (val == target) {
            return index;
        } else if (target < val) {
            return binarySearchRecursive(nums, start, index - 1, target);
        } else {
            return binarySearchRecursive(nums, index + 1, end, target);
        }
    }
}
