class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const result = new Array(nums.length * 2);

        for (let i = 0; i < nums.length; i++) {
            result[i] = nums[i];
            result[i + nums.length] = nums[i];
        }

        return result;
    }
}
