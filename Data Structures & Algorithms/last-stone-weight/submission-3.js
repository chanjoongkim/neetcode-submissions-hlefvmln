class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const pq = new MaxPriorityQueue();

        for (const stone of stones) {
            pq.enqueue(stone);
        }

        while (pq.size() > 1) {
            const stoneX = pq.dequeue();
            const stoneY = pq.dequeue();

            if (stoneX === stoneY) {
                continue;
            } else if (stoneY < stoneX) {
                const newStone = stoneX - stoneY;
                pq.enqueue(newStone);
            }
        }

        return pq.size() === 0 ? 0 : pq.front();
    }
}
