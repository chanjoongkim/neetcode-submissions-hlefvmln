class Solution {
    public int countComponents(int n, int[][] edges) {
        int connectedComponents = n;

        if (edges == null) {
            return connectedComponents;
        }

        int[] parents = new int[n + 1];
        for (int i = 0; i < n + 1; i++) {
            parents[i] = i;
        }

        int[] rank = new int[n + 1];
        Arrays.fill(rank, 1);

        for (int i = 0; i < edges.length; i++) {
            int n1 = edges[i][0];
            int n2 = edges[i][1];

            connectedComponents -= union(n1, n2, parents, rank);
        }

        return connectedComponents;
    }

    private int find(int[] parents, int n) {
        int parent = parents[n];

        while (parent != parents[parent]) {
            parents[parent] = parents[parents[parent]];
            parent = parents[parent];
        }

        return parent;
    }

    private int union(int n1, int n2, int[] parents, int[] rank) {
        int p1 = find(parents, n1);
        int p2 = find(parents, n2);

        if (p1 == p2) {
            return 0;
        }

        if (rank[p1] > rank[p2]) {
            parents[p2] = p1;
            rank[p1] += rank[p2];
        } else{
            parents[p1] = p2;
            rank[p2] += rank[p1];
        }

        return 1;
    }
}
