class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        const sortedQueries = [...queries];
        // sort intervals by start time
        intervals.sort((a, b) => a[0] - b[0]);

        // sort queries
        sortedQueries.sort((a, b) => a - b);

        const map = new Map();

        const result = [];

        // brute force
        // iterate through query
        // go through all of intervals and find shortest interval that contains the query point
        // O(N * M) time where N = length of intervals and M = length of queries

        // store [endTime, size], sort by size
        const pq = new PriorityQueue((a, b) => a[1] - b[1]);

        let index = 0;
        for (const query of sortedQueries) {
            let shortestLength = Number.MAX_SAFE_INTEGER;
            console.log(query, index);

            // take advantage of the fact that both queries and intervals are sorted
            // keep an index for intervals
            // as we iterate through sorted queries, keep the same index of intervals while we are still in range
            // only increment the interval index once we encounter a query point that is past the previous interval
            // that way we only iterate through the interval array once

            // add intervals
            while (index < intervals.length && intervals[index][0] <= query) {
                console.log(index, intervals[index], intervals[index][0], intervals[index][1]);
                // add end value and length of interval
                pq.enqueue([intervals[index][1], intervals[index][1] - intervals[index][0] + 1]);
                index++;
                console.log('newIndex', index);
            }

            console.log(query, pq);

            // remove intervals that end before our query
            while (!pq.isEmpty() && pq.front()[0] < query) {
                console.log('test');
                pq.dequeue();
            }

            if (!pq.isEmpty()) {
                console.log('test1');
                console.log(pq.front()[1]);
                shortestLength = pq.front()[1];
            }

            // while (index < intervals.length && intervals[index][1] < query) {
            //     index++;
            // }
            // // 
            // if (index !== intervals.length) {

            // }
            // for (const interval of intervals) {
            //     if (interval[0] <= query && query <= interval[1]) {
            //         shortestLength = Math.min(shortestLength, interval[1] - interval[0] + 1);
            //     }
            // }

            map.set(query, shortestLength);
            console.log(map);
        }

        for (const query of queries) {
            result.push(map.get(query) === Number.MAX_SAFE_INTEGER ? -1 : map.get(query));
        }

        return result;
    }
}
