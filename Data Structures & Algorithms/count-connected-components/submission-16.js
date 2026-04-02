class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // Union find algorithm
        const parent = [];
        const rank = [];

        for (let i = 0; i < n; i++) {
            parent.push(i);
            rank.push(1);
        }

        let components = n;

        // go through edges
        for (const [a, b] of edges) {
            // get parents of a and b
            // if different, then connect them
            // if same parent, then do nothing
            const aParent = this.findParent(parent, a);
            const bParent = this.findParent(parent, b);

            if (aParent !== bParent) {
                components--;
                if (rank[aParent] > rank[bParent]) {
                    rank[aParent]++;
                    parent[bParent] = aParent;
                } else {
                    rank[bParent]++;
                    parent[aParent] = bParent;
                }
            }
        }

        return components;
    }

    findParent(parent, node) {
        let val = parent[node];

        while (val != parent[val]) {
            val = parent[val];
        }

        return val;
    }
}
