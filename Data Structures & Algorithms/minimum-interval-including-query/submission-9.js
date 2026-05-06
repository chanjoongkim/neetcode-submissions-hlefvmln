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
        // O(N^2) time where N = length of intervals

        for (const query of sortedQueries) {
            let shortestLength = Number.MAX_SAFE_INTEGER;

            for (const interval of intervals) {
                if (interval[0] <= query && query <= interval[1]) {
                    shortestLength = Math.min(shortestLength, interval[1] - interval[0] + 1);
                }
            }

            map.set(query, shortestLength);
        }

        for (const query of queries) {
            result.push(map.get(query) === Number.MAX_SAFE_INTEGER ? -1 : map.get(query));
        }

        return result;
    }
}
