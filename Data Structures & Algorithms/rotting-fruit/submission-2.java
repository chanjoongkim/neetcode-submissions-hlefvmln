class Solution {
    public int orangesRotting(int[][] grid) {
        // do multi-source BFS, starting from rotten fruit and iterating outward until we have no more fruit to rot
        // return the final "level" of the BFS

        Queue<Pair<Integer, Integer>> queue = new LinkedList<>();
        Set<String> visited = new HashSet<>();

        for (int r = 0; r < grid.length; r++ ) {
            for (int c = 0; c < grid[0].length; c++) {
                if (grid[r][c] == 2) {
                    queue.add(new Pair<>(r, c));
                    visited.add(r + "-" + c);
                }
            }
        }

        int[] dr = new int[] { -1, 1, 0, 0 };
        int[] dc = new int[] { 0, 0, -1, 1 };

        boolean fruitExists = false;
        int level = 0;
        while (!queue.isEmpty()) {
            fruitExists = true;
            level++;
            int levelSize = queue.size();

            System.out.println(level);
            System.out.println(queue);

            for (int i = 0; i < levelSize; i++) {
                Pair<Integer, Integer> spot = queue.poll();
                int r = spot.getKey();
                int c = spot.getValue();

                grid[r][c] = 2;

                // iterate through neighbors
                for (int j = 0; j < 4; j++) {
                    int newR = r + dr[j];
                    int newC = c + dc[j];

                    if (newR >= 0 && newR < grid.length && newC >= 0 && newC < grid[0].length && !visited.contains(newR + "-" + newC) && grid[newR][newC] == 1) {
                        visited.add(newR + "-" + newC);
                        queue.offer(new Pair<>(newR, newC));
                    }
                }
            }
        }

        // check if any fresh fruit remaining
        for (int r = 0; r < grid.length; r++ ) {
            for (int c = 0; c < grid[0].length; c++) {
                if (grid[r][c] == 1) {
                    return -1;
                }
            }
        }

        return fruitExists ? level - 1 : 0;
    }
}
