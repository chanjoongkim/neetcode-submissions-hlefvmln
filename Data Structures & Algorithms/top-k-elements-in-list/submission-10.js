class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (!nums || k === 0) {
            return [];
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        const freqs = new Map();

        for (const num of nums) {
            freqs.set(num, (freqs.get(num) ?? 0) + 1);
        }

        for (const [num, freq] of freqs) {
            buckets[freq].push(num);
        }

        const result = [];
        let index = buckets.length - 1;
        while (k > 0 && index >= 0) {
            // go backwards from bucket and add numbers until k is 0
            if (buckets[index].length > 0) {
                result.push(...buckets[index]);
                k -= buckets[index].length;
            }
            index--;
        }

        return result;
    }
}
