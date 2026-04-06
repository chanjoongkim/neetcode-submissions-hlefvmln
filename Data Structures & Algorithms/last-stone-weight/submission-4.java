class Solution {
    public int lastStoneWeight(int[] stones) {
        // max priority queue where first element is the largest
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);

        for (int stone : stones) {
            pq.offer(stone);
        }

        while (pq.size() > 1) {
            int heaviestStone = pq.poll();
            int secondHeaviestStone = pq.poll();

            // if stones are equal, then both are destroyed
            if (heaviestStone == secondHeaviestStone) {
                continue;
            } else {
                int newStone = heaviestStone - secondHeaviestStone;
                pq.offer(newStone);
            }
        }

        return pq.size() == 0 ? 0 : pq.peek();
    }
}
