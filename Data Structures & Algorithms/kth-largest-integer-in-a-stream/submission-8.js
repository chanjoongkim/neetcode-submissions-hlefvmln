class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.pq = new MinPriorityQueue();

        for (const num of nums) {
            this.pq.enqueue(num);
            if (this.pq.size() > k) {
                this.pq.dequeue();
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.pq.enqueue(val);
        if (this.pq.size() > this.k) {
            this.pq.dequeue();
        }

        return this.pq.front();
    }
}
