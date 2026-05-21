class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        if (!nums) {
            return 0;
        }

        const min = Math.min(...nums);

        let maxSum = min < 0 ? min : 0;
        let index = 0;
        let curr = 0;

        while (index < nums.length) {
            curr += nums[index];

            maxSum = Math.max(curr, maxSum);

            if (curr < 0) {
                curr = 0;
            }
            index++;
        }

        if (maxSum === 0) {
            maxSum = min;
        }

        let minSum = 0;
        curr = 0;
        index = 0;

        while (index < nums.length) {
            curr -= nums[index];

            minSum = Math.max(curr, minSum);

            if (curr < 0) {
                curr = 0;
            }
            index++;
        }

        minSum *= -1;

        console.log(maxSum, minSum);

        const totalSum = nums.reduce((acc, curr) => acc + curr, 0);

        if (totalSum === minSum) {
            return maxSum;
        }

        return Math.max(maxSum, totalSum - minSum);
    }
}
