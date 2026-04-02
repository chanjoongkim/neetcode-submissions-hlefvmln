class KthLargest {
    PriorityQueue<Integer> pq;
    int k;

    public KthLargest(int k, int[] nums) {
        this.pq = new PriorityQueue<>();
        this.k = k;

        for (int num : nums) {
            this.pq.add(num);
        }

        while (this.pq.size() > k) {
            this.pq.poll();
        }

    }
    
    public int add(int val) {
        if (this.pq.size() < k) {
            this.pq.add(val);
        }
        else if (val > this.pq.peek()) {
            this.pq.add(val);
            this.pq.poll();
        }
        
        return this.pq.peek();
    }
}
