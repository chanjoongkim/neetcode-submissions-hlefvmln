class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        // sort intervals by start
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        // for (int[] interval : intervals) {
        //     System.out.println(interval[0] + "-" + interval[1]);
        // }

        int prevEnd = intervals[0][1];

        int removals = 0;
        for (int i = 1; i < intervals.length; i++) {
            int[] interval = intervals[i];

            // overlaps
            if (interval[0] < prevEnd) {
                prevEnd = Math.min(prevEnd, interval[1]);
                removals++;
            } else {
                prevEnd = interval[1];
            }
        }

        return removals;
    }
}
