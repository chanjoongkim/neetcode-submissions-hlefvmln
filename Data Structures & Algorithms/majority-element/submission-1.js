class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        if (!nums) {
            return -1;
        }

        const freqs = {};
        let resultFreq = 0;
        let result = nums[0];

        for (const num of nums) {
            if (freqs[num]) {
                freqs[num]++;
                if (freqs[num] > resultFreq) {
                    resultFreq = freqs[num];
                    result = num;
                }
            }
            else {
                freqs[num] = 1;
            }
        }

        return result;
    }
}
