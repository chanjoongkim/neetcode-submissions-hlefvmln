class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        Map<Integer, Set<Integer>> graph = new HashMap<>();

        // build up graph
        for (int[] courses : prerequisites) {
            int preq = courses[1];
            int course = courses[0];

            Set<Integer> neighbors = graph.getOrDefault(preq, new HashSet<>());
            neighbors.add(course);

            graph.put(preq, neighbors);
        }

        // run DFS on each course, and see if a cycle is detected
        for (int i = 0; i < numCourses; i++) {
            Set<Integer> visited = new HashSet<>();
            if (!dfs(graph, visited, i)) {
                return false;
            }

            // graph.put(i, new HashSet<>());
        }

        return true;
    }

    private boolean dfs(Map<Integer, Set<Integer>> graph, Set<Integer> visited, int courseNum) {
        // has cycle, so return false to indicate that we can't finish
        if (visited.contains(courseNum)) {
            return false;
        }

        visited.add(courseNum);

        Set<Integer> neighbors = graph.get(courseNum);

        if (neighbors == null) {
            return true;
        }

        for (int neighbor : neighbors) {
            if (!dfs(graph, visited, neighbor)) {
                return false;
            }
        }

        graph.put(courseNum, new HashSet<>());

        return true;
    }
}
