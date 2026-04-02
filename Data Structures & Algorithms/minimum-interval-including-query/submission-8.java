class Solution {
    public int[] minInterval(int[][] intervals, int[] queries) {
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        int[] sortedQueries = queries.clone();
        Arrays.sort(sortedQueries);

        Map<Integer, Integer> map = new HashMap<>();
        int i = 0;
        for (int q : sortedQueries) {
            while (i < intervals.length && intervals[i][0] <= q) {
                int length = intervals[i][1] - intervals[i][0] + 1;
                minHeap.offer(new int[] { length, intervals[i][1] });
                i++;
            }

            while (!minHeap.isEmpty() && minHeap.peek()[1] < q) {
                minHeap.poll();
            }

            if (!minHeap.isEmpty()) {
                map.put(q, minHeap.peek()[0]);
            } else {
                map.put(q, -1);
            }
        }

        int[] result = new int[queries.length];
        for (int j = 0; j < queries.length; j++) {
            result[j]= map.get(queries[j]);
        }

        return result;
    }
}
