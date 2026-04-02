class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
        this.length = 0;
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.length === 0) {
            this.minHeap.enqueue(num);
        } else {
            if (num < this.minHeap.front()) {
                this.maxHeap.enqueue(num);
            } else {
                this.minHeap.enqueue(num);
            }

            // rebalance if sizes are off
            if (this.minHeap.size() - this.maxHeap.size() > 1) {
                const numToMove = this.minHeap.dequeue();
                this.maxHeap.enqueue(numToMove);
            } else if (this.maxHeap.size() - this.minHeap.size() > 1) {
                const numToMove = this.maxHeap.dequeue();
                this.minHeap.enqueue(numToMove);
            }
        }

        this.length++;
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.length % 2 == 1) {
            if (this.maxHeap.size() > this.minHeap.size()) {
                return this.maxHeap.front();
            } else {
                return this.minHeap.front();
            }
        } else {
            return (this.maxHeap.front() + this.minHeap.front()) / 2;
        }
    }
}
