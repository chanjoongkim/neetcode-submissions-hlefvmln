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
            const heaviestStone = pq.dequeue();
            const secondHeaviestStone = pq.dequeue();

            if (heaviestStone === secondHeaviestStone) {
                continue;
            } else {
                const newStone = heaviestStone - secondHeaviestStone;
                pq.enqueue(newStone);
            }
        }

        return pq.size() === 0 ? 0 : pq.front();
    }
}
