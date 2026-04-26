class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        const parents = new Array(n + 1).fill(0);
        const rank = new Array(n + 1).fill(1);

        for (let i = 1; i <= n; i++) {
            parents[i] = i;
        }

        for (const [a, b] of edges) {
            const aParent = this.find(parents, a);
            const bParent = this.find(parents, b);

            // found our edge that is contained in the same component (so it forms a cycle)
            if (aParent === bParent) {
                return [a, b];
            }

            this.union(parents, rank, aParent, bParent);
        }

        return [-1, -1];
    }

    find(parents, node) {
        let parent = parents[node];
        // if node is only node in component, then we return immediately (since parent === parents[n])
        // else, we continue searching through parents until we find the "root" parent of the component (where parent === parents[parent])
        while (parent !== parents[parent]) {
            parent = parents[parent];
        }

        return parent;
    }

    union(parents, rank, nodeA, nodeB) {
        if (rank[nodeA] > rank[nodeB]) {
            rank[nodeA]++;

            parents[nodeB] = nodeA;
        } else {
            rank[nodeB]++;
            parents[nodeA] = nodeB;
        }
    }
}
