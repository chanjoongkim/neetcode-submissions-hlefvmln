class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        // topological sort

        const graph = {};
        const degrees = {};
        const n = edges.length;

        for (let i = 0; i <= n; i++) {
            graph[i] = new Set();
            degrees[i] = 0;
        }

        for (const [a, b] of edges) {
            graph[a].add(b);
            graph[b].add(a);

            degrees[a]++;
            degrees[b]++;
        }

        const queue = new Queue();
        Object.keys(degrees).forEach((key) => {
            if (degrees[key] === 1) {
                queue.push(key);
            }
        });

        // go through queue while we have degrees of 1, until we can't anymore.
        // trim graph/degrees as we iterate. At the end, the graph will only contain the cycle.

        while(!queue.isEmpty()) {
            const node = queue.pop();

            // degrees[node]--;

            const neighbors = graph[node];

            neighbors.forEach((neighbor) => {
                // if (neighbor != node) {
                    degrees[neighbor]--;
                    if (degrees[neighbor] === 1) {
                        queue.push(neighbor);
                    }
                    graph[neighbor].delete(node);
                    graph[node].delete(neighbor);
                // }
            })
        }

        // graph should only contain the cycle
        for (let i = n - 1; i >= 0; i--) {
            const [a, b] = edges[i];
            if (graph[a].has(b) && graph[b].has(a)) {
                return [a, b];
            }
        }

        return [-1, -1];
    }
}
