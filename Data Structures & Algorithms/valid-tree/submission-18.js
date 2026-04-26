class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // build up tree with Nodes, then see if there is a cycle within the graph
        const graph = new Map();

        for (let i = 0; i < n; i++) {
            graph.set(i, new Set());
        }

        for (const [a, b] of edges) {
            const aNeighbors = graph.get(a);
            const bNeighbors = graph.get(b);

            aNeighbors.add(b);
            bNeighbors.add(a);

            graph.set(a, aNeighbors);
            graph.set(b, bNeighbors);
        }


        return !this.hasCycle(graph)
    }

    hasCycle(graph) {
        // pick node 0, then do a BFS from there, and if we encounter a node we've already visited then return false
        // else at the end our visited set size should equal the number of nodes

        const visited = new Set();
        const queue = new Queue();

        queue.enqueue([0, -1]);

        while (!queue.isEmpty()) {
            const [node, parent] = queue.dequeue();
            visited.add(node);
            
            // go through neighbors
            const neighbors = graph.get(node);

            for (const neighbor of neighbors) {
                // skip current node (the parent)
                if (neighbor === parent) {
                    continue;
                }

                // found a cycle, so return true (since we have a cycle)
                if (visited.has(neighbor)) {
                    console.log(node, neighbor);
                    return true;
                }

                queue.enqueue([neighbor, node]);
            }
        }

        console.log(visited.size);
        console.log(graph.size);

        return visited.size !== graph.size;
    }
}
