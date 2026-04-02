class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        int n = edges.length;
        int[] parent = new int[n + 1];
        int[] rank = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            parent[i] = i;
            rank[i] = 1;
        }

        // go through edges, and build components
        // once we find the first edge that we can't add, return it?
        for (int[] edge : edges) {
            int a = edge[0];
            int b = edge[1];

            int aParent = find(parent, a);
            int bParent = find(parent, b);

            if (aParent == bParent) {
                return edge;
            }

            union(parent, rank, a, aParent, b, bParent);
        }

        return new int[] { -1, -1 };
    }

    private int find(int[] parent, int node) {
        int val = parent[node];

        while (val != parent[val]) {
            val = parent[val];
        }

        return val;
    }

    private void union(int[] parent, int[] rank, int a, int aParent, int b, int bParent) {
        if (rank[aParent] > rank[bParent]) {
            rank[aParent]++;
            parent[bParent] = aParent;
        } else {
            rank[bParent]++;
            parent[aParent] = bParent;
        }
    }
}
