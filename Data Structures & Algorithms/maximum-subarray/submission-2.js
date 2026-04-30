class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if (!nums) {
            return 0;
        }

        let result = Number.MIN_SAFE_INTEGER;
        let curr = 0;

        for (const num of nums) {
            curr += num;

            result = Math.max(result, curr);
            if (curr < 0) {
                curr = 0;
            }
        }

        return result;
    }
}
