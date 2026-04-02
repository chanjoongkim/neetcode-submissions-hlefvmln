class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSequence = 0;
        const set = new Set(nums);

        for (const num of nums) {
            // start of a sequence
            if (!set.has(num - 1)) {
                let currentSequence = 0;
                let currentNum = num;
                while (set.has(currentNum)) {
                    currentSequence++;
                    currentNum++;
                }

                longestSequence = Math.max(longestSequence, currentSequence);
            }
        }

        return longestSequence;
    }
}
