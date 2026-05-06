class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        // algorithm:
        // step 1: insert newInterval into intervals (ignoring overlaps)
        // step 2: iterate through intervals, and compare pairs of intervals
        // if they overlap, combine, else move to next index
        // repeat until we reach the end of the array

        if (!intervals) {
            return null;
        }

        // step 1, insert into intervals at the appropriate place based on newInterval[0];
        let index = 0;
        while (index < intervals.length) {
            const start = intervals[index][0];
            if (start >= newInterval[0]) {
                intervals = [...intervals.slice(0, index), newInterval, ...intervals.slice(index)];
                break;
            }
            index++;
        }
        // special case where we reached the end, if so then just add to the end
        if (index === intervals.length) {
            intervals.push(newInterval);
        }

        // step 2: compare pairs of intervals and combine if they overlap
        index = 0;
        while (index < intervals.length - 1) {
            const interval1 = intervals[index];
            const interval2 = intervals[index + 1];

            if (this.overlaps(interval1, interval2)) {
                // combine intervals and DONT increment index as the new combined interval should remain at our current index
                const newInterval = this.mergeIntervals(interval1, interval2);
                intervals[index] = newInterval;
                intervals = [...intervals.slice(0, index + 1), ...intervals.slice(index + 2)];
            }
            else {
                index++;
            }
        }

        return intervals;
    }

    mergeIntervals(interval1, interval2) {
        // set start and end to min/max of intervals
        const min = Math.min(interval1[0], interval2[0]);
        const max = Math.max(interval1[1], interval2[1]);

        return [min, max];
    }

    overlaps(interval1, interval2) {
        return (interval1[0] <= interval2[0] && interval2[0] <= interval1[1] ||
            interval2[0] <= interval1[0] && interval1[0] <= interval2[1]);
    }
}
