class Solution {
    public int findMin(int[] nums) {
        if (nums == null) {
            return -1;
        }

        int result = nums[0];
        int left = 0;
        int right = nums.length - 1;

        // modified binary search, where we have to also evaluate if the mid value is within the bounds of left/right
        // if not, then we need to move our parameters rightwards (all the time I think?)
        // once our val is within the bounds, then return the leftmost index
        while (left <= right) {
            int index = (left + right) / 2;
            int val = nums[index];

            // we're in the sorted part
            if (nums[left] <= val && val <= nums[right]) {
                return Math.min(result, nums[left]);
            }

            result = Math.min(result, val);
            if (nums[left] <= val) {
                left = index + 1;
            } else {
                right = index - 1;
            }
        }

        return result;
    }
}
