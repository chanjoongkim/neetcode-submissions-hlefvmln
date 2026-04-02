class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        // will store pair of ints, where [0] is the value and [1] is the index
        Deque<int[]> deque = new LinkedList<>();

        List<Integer> list = new ArrayList<>();

        int left = 0;
        for (int r = 0; r < nums.length; r++) {
            // remove all values in deque smaller than the current nums[right] as we'll never consider them
            // while nums[right] is in our window
            while (!deque.isEmpty() && deque.peekLast()[0] < nums[r]) {
                deque.pollLast();
            }
            deque.addLast(new int[] { nums[r], r });

            // remove the max if it's not in our window
            while (left > deque.peekFirst()[1]) {
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
