class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.pq = new MinPriorityQueue();
        this.k = k;

        for (const num of nums) {
            this.pq.enqueue(num);
        }

        while (this.pq.size() > k) {
            this.pq.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.pq.size() < this.k) {
            this.pq.enqueue(val);
        } else if (val > this.pq.front()) {
            this.pq.enqueue(val);
            this.pq.dequeue();
        }

        return this.pq.front();
    }
}
