class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        // sort by start time
        intervals.sort((a, b) => a[0] - b[0]);
        let result = 0;
        let prevEnd = intervals[0][1];

        // go from left to right of sorted intervals
        for (let i = 1; i < intervals.length; i++) {
            const interval = intervals[i];
            // overlaps
            if (interval[0] < prevEnd) {
                // greedily remove the interval with the longest "end"
                prevEnd = Math.min(prevEnd, interval[1]);
                result++;
            } else {
                prevEnd = interval[1];
            }
        }

        return result;
    }
}
