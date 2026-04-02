class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const dp = new Array(nums.length).fill(0);
        let max = 1;
        dp[0] = 1;

        for (let i = 1; i < nums.length; i++) {
            let curr = 0;
            for (let j = i - 1; j >= 0; j--) {
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
