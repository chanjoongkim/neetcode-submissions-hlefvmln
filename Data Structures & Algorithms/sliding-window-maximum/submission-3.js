class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

        const result = [];

        // create first window
        for (let i = 0; i < k; i++) {
            maxHeap.enqueue([nums[i], i]);
        }

        let left = 0;
        for (let r = k - 1; r < nums.length; r++) {
            // add our right value to the maxHeap
            maxHeap.enqueue([nums[r], r]);

            result.push(maxHeap.front()[0]);

            // shift window to the left
            left++;
            while (maxHeap.size() > 0 && maxHeap.front()[1] < left) {
                maxHeap.dequeue();
            }
        }

        return result;
    }
}
