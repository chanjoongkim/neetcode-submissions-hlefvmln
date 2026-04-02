class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // Kadane's algorithm
        // greedy approach, just reset whenever our curr sum is < 0

        let max = Number.MIN_SAFE_INTEGER;
        let curr = 0;

        nums.forEach((num) => {
            curr += num;

            max = Math.max(max, curr);

            curr = curr < 0 ? 0 : curr;
        });

        return max;
    }
}
