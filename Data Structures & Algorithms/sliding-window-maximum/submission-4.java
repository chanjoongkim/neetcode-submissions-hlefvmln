class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        // will store pair of ints, where [0] is the value and [1] is the index
        Deque<int[]> deque = new LinkedList<>();

        List<Integer> list = new ArrayList<>();

        // create first window
        // for (int i = 0; i < k; i++) {
        //     maxHeap.add(new int[] { nums[i], i });
        // }

        int left = 0;
        // start right r at the actual right index (inclusive) and add to maxHeap first
        for (int r = 0; r < nums.length; r++) {
            while (!deque.isEmpty() && deque.peekLast()[0] < nums[r]) {
                deque.pollLast();
            }
            deque.addLast(new int[] { nums[r], r });


            if (left > deque.peekFirst()[1]) {
                deque.pollFirst();
            }

            // move sliding window over one if applicable
            // add to result
            if ((r + 1) >= k) {
                list.add(deque.peekFirst()[0]);
                left++;
            }
            
        }

        return list.stream().mapToInt(i -> i).toArray();
    }
}
