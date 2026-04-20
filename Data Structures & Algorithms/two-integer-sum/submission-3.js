class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    /**
     * ex: [3, 4, 5, 6] target = 7
     * 
     * 4
     * map[ [3, 0] ]
     */
    twoSum(nums, target) {
        const set = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const complement = target - num;

            if (set.has(complement)) {
                const otherIndex = set.get(complement);

                return [otherIndex, i];
            }

            set.set(num, i);
        }

        return [-1, -1];
    }
}
