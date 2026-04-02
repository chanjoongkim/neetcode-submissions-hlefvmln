class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // solution: O(N) time complexity where N = length of nums
    // O(N) space complexity where N = lenth of nums
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
