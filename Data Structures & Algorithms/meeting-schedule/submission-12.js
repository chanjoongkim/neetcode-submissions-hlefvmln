/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // sort by start time
        intervals.sort((a, b) => a.start - b.start);

        for (let i = 0; i < intervals.length - 1; i++) {
            const interval1 = intervals[i];
            const interval2 = intervals[i + 1];

            if (this.overlaps(interval1, interval2)) {
                return false;
            }
        }        

        return true;
    }

    overlaps(interval1, interval2) {
        return interval2.start < interval1.end;
        return (interval1.start < interval2.start && interval2.start < interval1.end) || 
        (interval2.start < interval1.start && interval1.start < interval2.end);
    }
}
