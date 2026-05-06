class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (!intervals) {
            return [];
        }
        // sort by start times
        intervals.sort((a, b) => a[0] - b[0]);

        const result = [];
        result.push(intervals[0]);

        for (let i = 1; i < intervals.length; i++) {
            const interval = intervals[i];

            if (this.overlaps(result.at(-1), interval)) {
                result[result.length - 1] = this.mergeIntervals(result.at(-1), interval);
            }
            else {
                result.push(interval);
            }
        }

        return result;
    }

    overlaps(interval1, interval2) {
        return (interval1[0] <= interval2[0] && interval2[0] <= interval1[1]) ||
        (interval2[0] <= interval1[0] && interval1[0] <= interval2[1]);
    }

    mergeIntervals(interval1, interval2) {
        return [Math.min(interval1[0], interval2[0]), Math.max(interval1[1], interval2[1])];
    }
}
