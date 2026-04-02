class Solution {
    public int findDuplicate(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }

        int slow = 0;
        int fast = 0;

        // guaranteed to have a cycle
        while (true) {
            slow = nums[slow];

            fast = nums[fast];
            fast = nums[fast];

            if (nums[slow] == nums[fast]) {
                break;
            }
        }

        int slow2 = 0;
        while (true) {
            slow = nums[slow];
            slow2 = nums[slow2];
            if (slow == slow2) {
                return slow2;
            }
        }
    }
}
