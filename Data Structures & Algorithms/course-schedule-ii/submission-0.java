class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        Map<Integer, Set<Integer>> graph = new HashMap<>();
        Map<Integer, Integer> degrees = new HashMap<>();

        for (int i = 0; i < numCourses; i++) {
            degrees.put(i, 0);
        }

        for (int[] courses : prerequisites) {
            int course = courses[0];
            int prereq = courses[1];

            Set<Integer> neighbors = graph.getOrDefault(course, new HashSet<>());
            neighbors.add(prereq);
            graph.put(course, neighbors);

            degrees.put(prereq, degrees.get(prereq) + 1);
        }

        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (degrees.get(i) == 0) {
                queue.offer(i);
            }
        }

        int finished = 0;
        List<Integer> result = new ArrayList<>();
        while(!queue.isEmpty()) {
            int course = queue.poll();
            result.add(course);
            finished++;

            Set<Integer> neighbors = graph.get(course);

            if (neighbors == null) {
                continue;
            }

            for (int neighbor : neighbors) {
                degrees.put(neighbor, degrees.get(neighbor) - 1);
                if (degrees.get(neighbor) == 0) {
                    queue.offer(neighbor);
                }
            }
        }

        if (finished != numCourses) {
            return new int[] {};
        }

        Collections.reverse(result);

        return result.stream().mapToInt(i -> i).toArray();
    }
}
