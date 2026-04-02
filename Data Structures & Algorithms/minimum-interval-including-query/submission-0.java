class Solution {
    public int[] minInterval(int[][] intervals, int[] queries) {
        int[] result = new int[queries.length];

        for (int i = 0; i < queries.length; i++) {
            result[i] = findMinLength(intervals, queries[i]);
        }

        return result;
    }

    private int findMinLength(int[][] intervals, int num) {
        int minLength = Integer.MAX_VALUE;
        int[] result = null;

        for (int[] interval : intervals) {
            if (interval[0] <= num && num <= interval[1] && (interval[1] - interval[0] + 1) < minLength) {
                minLength = interval[1] - interval[0] + 1;
                result = interval;
            } 
        }

        return minLength != Integer.MAX_VALUE ? minLength : -1;
    }
}
