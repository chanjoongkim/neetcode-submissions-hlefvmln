class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     * 
     * rules:
     * 1. if CPU is idle and no available tasks, do nothing
     * 2. if CPU is idle and available tasks, CPU will prioritize 
     *      task with SHORTEST PROCESSING TIME
     *    a. In the event of a tie, CPU should choose the one with the smallest INDEX
     * 3. Once a task is started, the CPU will process the entire task
     * 4. CPU can finish a task then start a new one immediately (don't have to wait for next time increment)
     * 5. if we are at a time before ENQUEUE TIME, then we can't process that task
     */
    getOrder(tasks) {
        let time = 1;
        let result = [];

        // create new tasks with indices
        const newTasks = tasks.map((t, i) => [...t, i]);
        // sort by enqueueTime, but retain original indices
        newTasks.sort((a, b) => a[0] - b[0]);

        // index to track which tasks have been added
        let index = 0;

        // keep [processingTime, index] pairs in priority queue
        // prioritize shortest processing time, then by index
        // we only add tasks into our queue once the time >= enqueueTime for the tasks
        const pq = new PriorityQueue((a, b) => a[1] - b[1] || a[2] - b[2]);
        
        while (result.length !== tasks.length) {
            // look for entries to add into our priority queue based on current time
            while (index < newTasks.length && newTasks[index][0] <= time) {
                pq.push(newTasks[index]);
                index++;
            }

            if (!pq.isEmpty()) {
                const task = pq.pop();
                result.push(task[2]);
                time += task[1];
            }
            else {
                time++;
            }
        }

        return result;
    }
}
