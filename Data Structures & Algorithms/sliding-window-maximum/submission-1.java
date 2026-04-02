class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        // will store pair of ints, where [0] is the value and [1] is the index
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> b[0] - a[0]);

        List<Integer> list = new ArrayList<>();

        // create first window
        for (int i = 0; i < k; i++) {
            maxHeap.add(new int[] { nums[i], i });
        }

        int left = 0;
        // start right r at the actual right index (inclusive) and add to maxHeap first
        for (int r = k - 1; r < nums.length; r++) {
            maxHeap.add(new int[] { nums[r], r });

            // add current max in our maxHeap
            list.add(maxHeap.peek()[0]);

            // move sliding window over one
            left++;
            while (!maxHeap.isEmpty() && maxHeap.peek()[1] < left) {
                maxHeap.poll();
            }
            
        }

        return list.stream().mapToInt(i -> i).toArray();
    }
}
