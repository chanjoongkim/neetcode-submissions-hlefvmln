class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (!nums) {
            return [-1, -1];
        }

        const complements = new Map();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            // we have encountered the complement value before so we have a valid pair
            if (complements.has(complement)) {
                const complementIndex = complements.get(complement);

                // return [complementIndex, i]
                return [complementIndex, i];
            }

            // store the complement and index for future use
            complements.set(nums[i], i);
        }

        return [-1, -1];
    }
}
