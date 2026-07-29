class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numbersSeen = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            // see if we've seen the complement so far
            if (numbersSeen.has(complement)) {
                return [numbersSeen.get(complement), i];
            }

            numbersSeen.set(nums[i], i);
        }

        return [-1, -1];
    }
}
