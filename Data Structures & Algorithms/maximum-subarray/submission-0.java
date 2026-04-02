class Solution {
    public int maxSubArray(int[] nums) {
        int max = Integer.MIN_VALUE;
        int curr = 0;

        for (int num : nums) {
            curr += num;

            if (curr > max) {
                max = curr;
            }

            // reset our "subarray" if the sum ever drops below 0
            if (curr < 0) {
                curr = 0;
            }
        }

        return max;
    }
}
