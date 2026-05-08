class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixSums = {};
        prefixSums[0] = 1;

        let sum = 0;
        let result = 0;
        for (const num of nums) {
            sum += num;

            if (prefixSums[sum - k]) {
                result += prefixSums[sum - k];
            }

            if (prefixSums[sum]) {
                prefixSums[sum]++;
            }
            else {
                prefixSums[sum] = 1;
            }
        }

        return result;
    }
}
