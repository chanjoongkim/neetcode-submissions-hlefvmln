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

        const result = [];

        // step 1: add all intervals that END before the start of our new interval
        let index = 0;
        while (index < intervals.length) {
            const interval = intervals[index];
            if (interval[1] >= newInterval[0]) {
                break;
            }
            result.push(interval);
            index++;
        }

        // step 2: we encounter one of three scenarios
        // 1: we are at the end of the intervals (easy case, just add newInterval to end)
        // 2: the current interval start is > newInterval end (no overlap)
        //     - we can simply insert our newInterval and add the remaining ones
        // 3: overlap. If so, 

        // all intervals end before our newInterval start
        if (index === intervals.length) {
            result.push(newInterval);
            return result;
        }
        // no overlap, newInterval fits cleanly in the middle 
        else if (intervals[index][0] > newInterval[1]) {
            result.push(newInterval);

            while (index < intervals.length) {
                result.push(intervals[index]);
                index++;
            }

            return result;
        }
        // overlap 
        else {
            result.push(newInterval);
            while (index < intervals.length) {
                const interval = intervals[index];

                if (this.overlaps(interval, result.at(-1))) {
                    result[result.length - 1] = this.mergeIntervals(interval, result.at(-1));
                    
                }
                else {
                    result.push(interval);
                }

                index++;
            }

            return result;
        }



        // // step 1, insert into intervals at the appropriate place based on newInterval[0];
        // let index = 0;
        // while (index < intervals.length) {
        //     const start = intervals[index][0];
        //     if (start >= newInterval[0]) {
        //         intervals = [...intervals.slice(0, index), newInterval, ...intervals.slice(index)];
        //         break;
        //     }
        //     index++;
        // }
        // // special case where we reached the end, if so then just add to the end
        // if (index === intervals.length) {
        //     intervals.push(newInterval);
        // }

        // // step 2: compare pairs of intervals and combine if they overlap
        // index = 0;
        // while (index < intervals.length - 1) {
        //     const interval1 = intervals[index];
        //     const interval2 = intervals[index + 1];

        //     if (this.overlaps(interval1, interval2)) {
        //         // combine intervals and DONT increment index as the new combined interval should remain at our current index
        //         const newInterval = this.mergeIntervals(interval1, interval2);
        //         intervals[index] = newInterval;
        //         intervals = [...intervals.slice(0, index + 1), ...intervals.slice(index + 2)];
        //     }
        //     else {
        //         index++;
        //     }
        // }

        // return intervals;
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
