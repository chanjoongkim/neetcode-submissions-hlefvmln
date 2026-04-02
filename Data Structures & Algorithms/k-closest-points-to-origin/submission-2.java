class Solution {
    class Result {
        double distance;
        int[] point;

        Result(double distance, int[] point) {
            this.distance = distance;
            this.point = point;
        }
    }
    public int[][] kClosest(int[][] points, int k) {
        // min heap
        PriorityQueue<Result> pq = new PriorityQueue<>((a, b) -> Double.compare(b.distance, a.distance));

        int[] origin = new int[]{ 0, 0 };

        for (int[] point : points) {
            double dist = distance(origin, point);

            if (pq.size() < k) {
                pq.add(new Result(dist, point));
            } else if (dist < pq.peek().distance) {
                pq.add(new Result(dist, point));
                pq.poll();
            }
        }

        int[][] result = new int[k][2];

        int i = 0;
        while (pq.size() != 0) {
            result[i] = pq.poll().point;
            i++;
        }

        return result;
    }

    private double distance(int[] point1, int[] point2) {
        return Math.sqrt(((point2[0] - point1[0]) * (point2[0] - point1[0])) + ((point2[1]- point1[1]) * (point2[1] - point1[1])));
    }
}
