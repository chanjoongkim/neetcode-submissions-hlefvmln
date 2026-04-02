class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const graph = {};
        for (let i = 0; i < n; i++) {
            graph[i] = [];
        }

        edges.forEach(([a, b]) => {
            graph[a].push(b);
            graph[b].push(a);
        });

        const visited = new Set();
        if (!this.dfs(graph, visited, 0, -1)) {
            return false;
        }

        return visited.size === n;
    }

    // return false if there's a cycle
    dfs(graph, visited, node, parent) {
        if (visited.has(node)) {
            return false;
        }

        visited.add(node);

        const neighbors = graph[node];

        for (const neighbor of neighbors) {
            if (neighbor !== parent) {
                if (!this.dfs(graph, visited, neighbor, node)) {
                    return false;
                }
            }
        }

        return true;
    }
}
