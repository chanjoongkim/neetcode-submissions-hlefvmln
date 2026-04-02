class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MinPriorityQueue((point) => point[0]);

        for (const [x, y] of points) {
            const dist = (x ** 2) + (y ** 2);

            minHeap.enqueue([dist, x, y]);
        }

        const result = [];
        for (let i = 0; i < k; i++) {
            const item = minHeap.dequeue();
            result.push([item[1], item[2]]);
        }

        return result;
    }
}
