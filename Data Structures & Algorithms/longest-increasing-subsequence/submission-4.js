class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // algorithm
        // create an array of length nums
        // that stores the length of the "chain" we can make starting at a given index and value
        // set the last value of the array to 1 (since we reached the end)
        // go from right to left, and at each nums[i], we look through the remaining values to the right
        // and see the longest chain we can prepend to.

        if (!nums) {
            return 0;
        }

        if (nums.length === 1) {
            return 1;
        }

        const memo = new Array(nums.length).fill(0);
        memo[nums.length - 1] = 1;

        let result = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            // go through all values in memo to the right of i (j), and if nums[j] > nums[i]
            // record the highest chain value we find and store that in memo[i]
            let longestChain = 0;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] > nums[i] && memo[j] > longestChain) {
                    longestChain = memo[j];
                }
            }
            memo[i] = 1 + longestChain;
            result = Math.max(result, memo[i]);
        }

        return result;
    }
}
