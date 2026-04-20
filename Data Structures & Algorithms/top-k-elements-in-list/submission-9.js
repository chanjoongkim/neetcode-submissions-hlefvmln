class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqs = new Map();

        for (const num of nums) {
            freqs.set(num, (freqs.get(num) ?? 0) + 1);
        }

        // const buckets = new Array(nums.length + 1).fill([]);
        const buckets = Array.from({ length: nums.length + 1}, () => []);

        for (const [key, value] of freqs) {
            buckets[value].push(key);
        }

        const result = [];
        let freq = nums.length;
        while (k > 0) {
            if (buckets[freq].length > 0) {
                const items = buckets[freq];
                result.push(...items);
                k -= items.length;
            }
            freq--;
        }

        return result;
    }
}
