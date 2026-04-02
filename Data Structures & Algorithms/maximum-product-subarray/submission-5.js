class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let result = nums[0];
        let currMax = 1;
        let currMin = 1;

        for (const num of nums) {
            if (num === 0) {
                currMax = 1;
                currMin = 1;
                result = Math.max(0, result);
                continue;
            }

            const tmp = currMax;
            currMax = Math.max(num, num * currMax, num * currMin);
            currMin = Math.min(num, num * tmp, num * currMin);

            result = Math.max(result, currMax);
        }

        return result;
    }
}
