class Solution {
    public int countComponents(int n, int[][] edges) {
        Map<Integer, Set<Integer>> graph = new HashMap<>();

        for (int i = 0; i < n; i++) {
            graph.put(i, new HashSet<>());
        }

        for (int[] edge : edges) {
            int a = edge[0];
            int b = edge[1];

            graph.get(a).add(b);
            graph.get(b).add(a);
        }

        int components = 0;
        Set<Integer> visited = new HashSet<>();
        for (int i = 0; i < n; i++) {
            // skip nodes already visited in another DFS
            if (visited.contains(i)) {
                continue;
            }

            components++;
            dfs(graph, visited, i, -1);
        }

        return components;
    }

    private void dfs(Map<Integer, Set<Integer>> graph, Set<Integer> visited, int node, int parent) {
        if (visited.contains(node)) {
            return;
        }
        // keep adding nodes to visited to record which nodes we've touched
        visited.add(node);

        // go through neighbors, skip parent, until we can't
        Set<Integer> neighbors = graph.get(node);
        for (int neighbor : neighbors) {
            if (neighbor == parent) {
                continue;
            }

            dfs(graph, visited, neighbor, node);
        }
    }
}
