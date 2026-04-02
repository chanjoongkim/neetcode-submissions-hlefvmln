class Solution {
    public boolean validTree(int n, int[][] edges) {
        // build tree
        // keep track of node that doesn't have any incoming edges

        // do DFS on every node, and see if we find a cycle

        Map<Integer, Set<Integer>> graph = new HashMap<>();
        for (int i = 0; i < n; i++) {
            graph.put(i, new HashSet<>());
        }

        for (int[] edge : edges) {
            int a = edge[0];
            int b = edge[1];

            Set<Integer> aNeighbors = graph.get(a);
            Set<Integer> bNeighbors = graph.get(b);

            aNeighbors.add(b);
            bNeighbors.add(a);
        }

        // pick one node, and do DFS. If cycle detected, false.
        // if the "path" is not the length of n, then also false (disconnected graph)
        Set<Integer> visited = new HashSet<>();
        if (!dfsNoCycleDetected(graph, visited, 0)) {
            return false;
        }

        return visited.size() == n;
    }

    private boolean dfsNoCycleDetected(Map<Integer, Set<Integer>> graph, Set<Integer> visited, int node) {
        if (visited.contains(node)) {
            return false;
        }

        visited.add(node);

        // go through neighbors
        Set<Integer> neighbors = graph.get(node);
        for (int neighbor : neighbors) {
            // remove node from neighbor's set
            Set<Integer> neighborNeighbor = graph.get(neighbor);
            neighborNeighbor.remove(node);
            if (!dfsNoCycleDetected(graph, visited, neighbor)) {
                return false;
            }
        }

        return true;
    }
}
