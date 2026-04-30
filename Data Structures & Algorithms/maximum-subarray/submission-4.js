class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if (!nums) {
            return 0;
        }

        let result = nums[0];
        let curr = 0;

        for (const num of nums) {
            if (curr < 0) {
                curr = 0;
            }
            curr += num;

            result = Math.max(result, curr);
        }

        return result;
    }
}
