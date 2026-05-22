class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        if (!nums) {
            return [];
        }

        const freqs = new Map();
        for (const num of nums) {
            freqs.set(num, (freqs.get(num) ?? 0) + 1);
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of freqs) {
            const freqBucket = buckets[freq];
            freqBucket.push(num);
        }

        const result = [];
        let index = buckets.length - 1;
        // assume that k fits into bucket divisions cleanly
        while (index >= 0 && k > 0) {
            const mostFreq = buckets[index];
            for (const num of mostFreq) {
                result.push(num);
                k--;
            }
            index--;
        }

        return result;
    }
}
