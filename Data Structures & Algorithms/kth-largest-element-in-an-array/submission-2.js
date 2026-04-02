class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // minHeap
        const minHeap = new MinPriorityQueue();

        nums.forEach((num) => {
            if (minHeap.size() < k) {
                minHeap.enqueue(num);
            } else if (num > minHeap.front()) {
                minHeap.enqueue(num);
                minHeap.dequeue();
            }
        });

        return minHeap.dequeue();
    }
}
