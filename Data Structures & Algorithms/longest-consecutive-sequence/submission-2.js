class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums) {
            return 0;
        }

        const set = new Set(nums);

        let result = 0;
        for (const num of nums) {
            // start of sequence
            if (!set.has(num - 1)) {
                let seqNum = num;
                let seqLength = 0;
                while (set.has(seqNum)) {
                    seqLength++;
                    result = Math.max(result, seqLength);
                    seqNum++;
                }
            }
        }

        return result;
    }
}
