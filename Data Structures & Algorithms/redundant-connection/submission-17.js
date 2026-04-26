class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        // build graph
        const graph = new Map();
        for (let i = 1; i <= n; i++) {
            graph.set(i, new Set());
        }

        for (const [a, b] of edges) {
            graph.get(a).add(b);
            graph.get(b).add(a);
        }

        const visited = new Set();
        const cycle = new Set();

        // since graph is guaranteed to have a cycle, we know cycle will be filled out
        this.dfs(graph, 1, -1, visited, cycle);

        console.log(cycle);
        // go through edges in reverse, return first edge where cycle set contains both [a, b]
        for (let i = n - 1; i >= 0; i--) {
            const [a, b] = edges[i];

            if (cycle.has(a) && cycle.has(b)) {
                return [a, b];
            }
        }

        return [-1, -1];
    }

    dfs(graph, node, parent, visited, cycle) {
        if (visited.has(node)) {
            // found our cycle
            cycle.add(node);
            return false;
        }

        visited.add(node);

        const neighbors = graph.get(node);

        for (const neighbor of neighbors) {
            if (neighbor === parent) {
                continue;
            }

            if (!this.dfs(graph, neighbor, node, visited, cycle)) {
                // only add nodes to cycle where we know we returned false (to indicate that we reached a cycle)
                cycle.add(neighbor);
                return false;
            }
        }

        return true;
    }
}
