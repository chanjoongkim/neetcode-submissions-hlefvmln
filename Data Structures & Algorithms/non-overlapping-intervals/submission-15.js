class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (!intervals) {
            return [];
        }

        // sort by start time
        intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        const result = [];
        result.push(intervals[0]);

        console.log(intervals);

        for (let i = 1; i < intervals.length; i++) {
            const interval = intervals[i];

            // if they overlap, greedily pick the interval with the smaller end time
            if (this.overlaps(result.at(-1), interval)) {
                if (result.at(-1)[1] > interval[1]) {
                    // replace last result interval with current interval
                    result[result.length - 1] = interval;
                }
            }
            else {
                result.push(interval);
            }
        }

        console.log(result);

        return intervals.length - result.length;
    }

    overlaps(interval1, interval2) {
        return interval2[0] < interval1[1];
        // return (interval1[0] < interval2[0] && interval2[0] <= interval1[1]) || 
        // (interval2[0] < interval1[0] && interval1[0] <= interval2[1]);
    }
}
