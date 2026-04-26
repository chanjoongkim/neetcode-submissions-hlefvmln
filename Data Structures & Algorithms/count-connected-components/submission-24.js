class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // build graph
        const graph = new Map();
        for (let i = 0; i < n; i++) {
            graph.set(i, new Set());
        }

        for (const [a, b] of edges) {
            graph.get(a).add(b);
            graph.get(b).add(a);
        }

        const visited = new Set();
        let components = 0;
        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                components++;
                this.dfs(graph, i, visited);
            }
        }

        return components;
    }

    dfs(graph, node, visited) {
        if (visited.has(node)) {
            return;
        }

        visited.add(node);

        const neighbors = graph.get(node);
        for (const neighbor of neighbors) {
            this.dfs(graph, neighbor, visited);
        }
    }
}
