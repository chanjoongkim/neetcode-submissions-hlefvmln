class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complements = {};

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (complement in complements) {
                return [complements[complement], i];
            }
            complements[nums[i]] = i;
        }

        return [-1, -1];
    }
}
