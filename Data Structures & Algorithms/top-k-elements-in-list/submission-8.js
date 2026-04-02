class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqs = this.buildNumFreqs(nums);

        const heap = new MinPriorityQueue(a => a.freq);
        for (const num in freqs) {
            heap.enqueue({
                freq: freqs[num],
                num: num
            });

            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        const result = [];

        for (let i = 0; i < k; i++) {
            result.push(heap.dequeue().num);
        }

        return result;
    }

    buildNumFreqs(nums) {
        const freqs = {};

        for (const num of nums) {
            freqs[num] = freqs[num] ? freqs[num] + 1 : 1;
        }

        return freqs;
    }
}
