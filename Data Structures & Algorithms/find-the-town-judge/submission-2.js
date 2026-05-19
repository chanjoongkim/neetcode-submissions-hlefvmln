class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        // build adj list for graph
        const graph = new Map();

        for (let i = 1; i <= n; i++) {
            // graph of i to neighbors
            // neighbors is defined at the people who trust i
            graph.set(i, new Set());
        }

        // build up edges from trust
        for (const [a, b] of trust) {
            // a trusts b (so add a to b's neighbors)
            graph.get(b).add(a);
        }

        // get eligible judges
        // people who have N-1 size of neighbor set

        const eligibleJudges = new Set();
        for (const [key, value] of graph) {
            if (value.size === n - 1) {
                eligibleJudges.add(key);
            }
        }

        // now go through and ensure the eligible judges doesn't appear as A in the trust array
        for (const [a, b] of trust) {
            if (eligibleJudges.has(a)) {
                eligibleJudges.delete(a);
            }
        }

        // we should have exactly one eligible judge
        if (eligibleJudges.size !== 1) {
            return -1;
        }

        const [judge] = eligibleJudges;
        return judge;
    }
}
