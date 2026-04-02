class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        int n = edges.length;
        int[] parent = new int[n + 1];
        int[] rank = new int[n + 1];

        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 1;
        }

        // go through edges, and build components
        // once we find the first edge that we can't add, return it?
        for (int[] edge : edges) {
            int a = edge[0];
            int b = edge[1];

            if (!union(parent, rank, a, b)) {
                return edge;
            }
        }

        System.out.println(Arrays.toString(parent));
        System.out.println(Arrays.toString(rank));

        return new int[] { -1, -1 };
    }

    private int find(int[] parent, int node) {
        int val = parent[node];

        while (val != parent[val]) {
            // parent[val] = parent[parent[val]];
            val = parent[val];
        }

        return val;
    }

    private boolean union(int[] parent, int[] rank, int a, int b) {
        int aParent = find(parent, a);
        int bParent = find(parent, b);

        if (aParent == bParent) {
            return false;
        }

        if (rank[aParent] > rank[bParent]) {
            rank[aParent] += rank[bParent];
            parent[bParent] = aParent;
        } else {
            rank[bParent] += rank[aParent];
            parent[aParent] = bParent;
        }

        return true;
    }
}
