class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const graph = new Map();
        for (let i = 1; i <= n; i++) {
            graph.set(i, []);
        }

        for (const [u, v, t] of times) {
            graph.get(u).push([v, t]);
        }

        // djikstra's algorithm
        // use priority queue where we send [x, y] where x = node number and y = weight (time)
        // prioritize by time
        const pq = new PriorityQueue((a, b) => a[1] - b[1]);
        pq.enqueue([k, 0]);


        // use visited map to store each node and the min time it takes to get there
        const visited = new Map();
        for (let i = 1; i <= n; i++) {
            visited.set(i, Number.MAX_SAFE_INTEGER);
        }

        // use visited set to avoid repeats
        const visitedSet = new Set();

        while (!pq.isEmpty()) {
            const [node, time] = pq.dequeue();
            if (visitedSet.has(node)) {
                continue;
            }
            visited.set(node, Math.min(time, visited.get(node)));
            visitedSet.add(node);

            // go through neighbors and add them to queue, greedily adding them by smallest time
            const neighbors = graph.get(node);
            for (const [neighbor, neighborTime] of neighbors) {
                if (!visitedSet.has(neighbor)) {
                    pq.enqueue([neighbor, time + neighborTime]);
                }
            }
        }

        let maxTime = 0;
        for (const node of visited.keys()) {
            if (visited.get(node) === Number.MAX_SAFE_INTEGER) {
                return -1;
            }
            maxTime = Math.max(maxTime, visited.get(node));
        }

        return maxTime;
    }
}
