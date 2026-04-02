class Solution {
    public int[][] merge(int[][] intervals) {
        PriorityQueue<int[]> sortedIntervals = new PriorityQueue<>((a, b) -> a[0] - b[0]);

        for (int[] interval : intervals) {
            sortedIntervals.offer(interval);
        }

        List<int[]> result = new ArrayList<>();
        result.add(sortedIntervals.poll());

        // if first item in priority queue overlaps the last item in our result, then expand result's interval and pop from queue
        // else, pop from queue and add to end of result
        while (!sortedIntervals.isEmpty()) {
            int[] interval = sortedIntervals.poll();
            if (overlap(result.get(result.size() - 1), interval)) {
                int[] updatedInterval = result.get(result.size() - 1);
                updatedInterval[0] = Math.min(updatedInterval[0], interval[0]);
                updatedInterval[1] = Math.max(updatedInterval[1], interval[1]);
            } else {
                result.add(interval);
            }
        }

        return result.toArray(new int[0][]);
    }

    private boolean overlap(int[] i1, int[] i2) {
        return i2[0] <= i1[1];
    }
}
