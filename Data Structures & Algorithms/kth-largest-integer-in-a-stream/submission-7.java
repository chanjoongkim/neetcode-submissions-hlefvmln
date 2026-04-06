class KthLargest {
    int k;
    PriorityQueue<Integer> pq;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        // create priority queue with up to size k
        this.pq = new PriorityQueue<>(k);
        for (int num : nums) {
            this.pq.offer(num);
            if (this.pq.size() > this.k) {
                this.pq.poll();
            }
        }
    }
    
    public int add(int val) {
        this.pq.offer(val);
        if (this.pq.size() > this.k) {
            this.pq.poll();
        }

        return this.pq.peek();
    }
    /**
    k = 3 (3rd largest)
    [2, 3, 3]

    (add 3)
    [3, 3, 3]
    res: 3

    (add 5)
    [3, 3, 5]
    res: 3

    (add 6)
    [3, 5, 6]
    res: 3

    (add 7)
    [5, 6, 7]
    res: 5

    (add 8)
    [6, 7, 8]
    res: 6
    */
}
