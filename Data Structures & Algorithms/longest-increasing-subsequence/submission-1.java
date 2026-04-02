class Solution {
    public int lengthOfLIS(int[] nums) {
        int max = 1;

        int[] dp = new int[nums.length];
        dp[0] = 1;

        for (int i = 1; i < nums.length; i++) {
            // at each i, go backwards and find the biggest length subsequence with a value strictly less than nums[i]
            int curr = 0;
            for (int j = i - 1; j >= 0; j--) {
                if (nums[j] < nums[i] && dp[j] > curr) {
                    curr = dp[j];
                }
            }
            dp[i] = 1 + curr;
            max = Math.max(max, dp[i]);
        }

        return max;
    }
}
