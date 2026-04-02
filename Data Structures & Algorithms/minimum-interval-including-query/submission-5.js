class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        // sort intervals by start time
        intervals.sort((a, b) => a[0] - b[0]);

        // keep copy for original ordering
        const sortedQueries = [...queries].sort((a, b) => a - b);

        // minHeap where we sort by length ([length, endTime])
        const minHeap = new MinPriorityQueue((a) => a[0]);
        const res = new Map();
        let i = 0;

        sortedQueries.forEach((q) => {
            // add all intervals where startTime is <= q
            while (i < intervals.length && intervals[i][0] <= q) {
                const [l, r] = intervals[i];
                const length = r - l + 1;
                minHeap.push([length, intervals[i][1]]);
                i++;
            }

            // remove all active intervals that end before q
            while (!minHeap.isEmpty() && minHeap.front()[1] < q) {
                minHeap.pop();
            }

            // since heap is ordered by length, the top/front interval is the smallest interval that contains q
            // since start <= q < end
            if (!minHeap.isEmpty()) {
                res.set(q, minHeap.front()[0]);
            } else {
                res.set(q, -1);
            }
        });

        // add in original order
        const result = [];
        for (let j = 0; j < queries.length; j++) {
            result[j] = res.get(queries[j]);
        }

        return result;
    }
}
