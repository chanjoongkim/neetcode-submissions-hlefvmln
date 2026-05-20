class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        const graph = new Map();

        for (const [a, b] of edges) {
            if (!graph.has(a)) {
                graph.set(a, new Set());
            }
            if (!graph.has(b)) {
                graph.set(b, new Set());
            }

            graph.get(a).add(b);
            graph.get(b).add(a);
        }

        let min = Number.MAX_SAFE_INTEGER;
        const heights = new Map();

        for (let i = 0; i < n; i++) {
            const height = this.bfs(graph, i);
            heights.set(i, height);
            min = Math.min(min, height);
        }

        const result = [];
        for (const [k, v] of heights) {
            if (v === min) {
                result.push(k);
            }
        }

        return result;
    }
    
    // do BFS starting from root, and increment height of tree and return it
    bfs(graph, root) {
        const q = new Queue();
        const visited = new Set();

        q.push(root);
        visited.add(root);

        let height = 0;
        
        while (!q.isEmpty()) {
            const levelSize = q.size();

            for (let i = 0; i < levelSize; i++) {
                const node = q.pop();

                if (graph.has(node)) {
                    for (const neighbor of graph.get(node)) {
                        if (!visited.has(neighbor)) {
                            visited.add(neighbor);
                            q.push(neighbor);
                        }
                    }
                }
            }
            height++;
        }

        return height;
    }
}
