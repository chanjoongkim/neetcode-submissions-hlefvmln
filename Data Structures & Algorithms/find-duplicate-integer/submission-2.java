class Solution {
    public int findDuplicate(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            // found duplicate
            if (nums[Math.abs(nums[i]) - 1] < 0) {
                return Math.abs(nums[i]);
            }

            // make the index of the "ith" value negative to show that we've encountered the number i
            nums[Math.abs(nums[i]) - 1] *= -1;
        }

        return -1;
    }
}
