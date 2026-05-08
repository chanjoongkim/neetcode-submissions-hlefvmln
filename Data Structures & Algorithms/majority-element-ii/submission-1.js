class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * 
     * ex: [1, 2, 2, 2, 5]
     * 
     * freqsBar: Math.floor(5 / 3) = 1
     */
    majorityElement(nums) {
        const freqsBar = Math.floor(nums.length / 3);

        const freqs = new Map();

        for (const num of nums) {
            freqs.set(num, (freqs.get(num) ?? 0) + 1);
        }

        const result = [];

        for (const [key, value] of freqs) {
            if (value > freqsBar) {
                result.push(key);
            }
        }

        return result;
    }
}
