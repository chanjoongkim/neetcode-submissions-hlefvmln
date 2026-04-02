class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const priorityQueue = new PriorityQueue((a, b) => a[0] - b[0]);

        intervals.forEach((interval) => priorityQueue.push(interval));

        const result = [];
        result.push(priorityQueue.pop());

        while (!priorityQueue.isEmpty()) {
            const interval = priorityQueue.pop();
            if (this.overlaps(result[result.length - 1], interval)) {
                const updatedInterval = result.pop();
                updatedInterval[0] = Math.min(updatedInterval[0], interval[0]);
                updatedInterval[1] = Math.max(updatedInterval[1], interval[1]);
                result.push(updatedInterval);
            } else {
                result.push(interval);
            }
        }

        return result;
    }

    overlaps(i1, i2) {
        return i2[0] <= i1[1];
    }
}
