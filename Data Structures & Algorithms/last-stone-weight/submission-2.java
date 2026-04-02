class Solution {
    
    public int lastStoneWeight(int[] stones) {
        // max heap
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        for (int stone : stones) {
            pq.add(stone);
        }

        while (pq.size() > 1) {
            int stone1 = pq.poll();
            int stone2 = pq.poll();

            if (stone1 == stone2) {
                continue;
            } else if (stone2 < stone1) {
                int newStone = stone1 - stone2;
                pq.add(newStone);
            }
        }

        return pq.size() == 0 ? 0 : pq.poll();
    }
}
