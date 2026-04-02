class MedianFinder {
    PriorityQueue<Integer> minHeap;
    PriorityQueue<Integer> maxHeap;
    int length;

    public MedianFinder() {
        this.minHeap = new PriorityQueue<>();
        this.maxHeap = new PriorityQueue<>((a, b) -> b - a);
        this.length = 0;
    }
    
    public void addNum(int num) {
        // special case of the first number added
        if (this.length == 0) {
            this.minHeap.add(num);
        } else {
            int currentVal = minHeap.peek();

            if (num >= currentVal) {
                this.minHeap.add(num);
            } else {
                this.maxHeap.add(num);
            }

            // if two heap sizes are off by more than 1, rebalance
            if (this.minHeap.size() - this.maxHeap.size() > 1) {
                int numToMove = this.minHeap.poll();
                this.maxHeap.add(numToMove);
            } else if (this.maxHeap.size() - this.minHeap.size() > 1) {
                int numToMove = this.maxHeap.poll();
                this.minHeap.add(numToMove);
            }
        } 
        this.length++;
    }
    
    public double findMedian() {
        System.out.println(this.length);
        System.out.println(this.minHeap);
        System.out.println(this.maxHeap);
        System.out.println();
        // if odd, return minHeap
        if (this.length % 2 == 1) {
            // return the bigger of the two heaps
            if (this.minHeap.size() > this.maxHeap.size()) {
                return this.minHeap.peek();
            } else {
                return this.maxHeap.peek();
            }
        } else {
            return (this.minHeap.peek() + this.maxHeap.peek()) / 2.0;
        }
    }
}
