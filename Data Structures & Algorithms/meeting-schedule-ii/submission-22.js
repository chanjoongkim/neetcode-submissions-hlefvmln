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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (!intervals || intervals.length === 0) {
            return 0;
        }

        // sort by start times
        intervals.sort((a, b) => a.start - b.start);

        const endTimes = new MinPriorityQueue();
        endTimes.push(intervals[0].end);

        let maxRooms = endTimes.size();

        for (let i = 1; i < intervals.length; i++) {
            const interval = intervals[i];

            // pop all rooms where the meeting has ended before our current start time
            while (!endTimes.isEmpty() && endTimes.front() <= interval.start) {
                endTimes.dequeue();
            }
            endTimes.enqueue(interval.end);

            maxRooms = Math.max(maxRooms, endTimes.size());
        }

        return maxRooms;
    }
}
