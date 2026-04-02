class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let time = 0;
        const taskFreqs = {};
        const maxHeap = new PriorityQueue((a, b) => b[1] - a[1]);
        const queue = new Queue();

        tasks.forEach((task) => {
            taskFreqs[task] = taskFreqs[task] ? taskFreqs[task] + 1 : 1;
        });

        for (const [task, freq] of Object.entries(taskFreqs)) {
            maxHeap.enqueue([task, freq]);
        }

        while (!maxHeap.isEmpty() || !queue.isEmpty()) {
            if (!maxHeap.isEmpty()) {
                // process most freq task
                const [task, freq] = maxHeap.dequeue();

                taskFreqs[task]--;

                if (taskFreqs[task] > 0) {
                    queue.enqueue([task, time + n]);
                }
            }

            if (!queue.isEmpty()) {
                // see if we can pop first task
                const [task, nextTime] = queue.front();

                if (nextTime <= time) {
                    queue.dequeue();

                    maxHeap.enqueue([task, taskFreqs[task]]);
                }
            }

            time++;
        }

        return time;
    }
}
