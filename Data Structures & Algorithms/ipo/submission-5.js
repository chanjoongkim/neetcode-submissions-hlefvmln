class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        // new array of [profit, capital] pairs
        const projects = [];

        for (let i = 0; i < profits.length; i++) {
            projects.push([profits[i], capital[i]]);
        }

        // sort projects based on capital required
        projects.sort((a, b) => a[1] - b[1]);

        // priority queue where we prioritize profits
        const pq = new MaxPriorityQueue((p) => p[0]);

        let currentCapital = w;
        let index = 0;

        while (k > 0 && index < projects.length) {
            // edge case where we can never have enough capital to reach the next project
            if (projects[index][1] > currentCapital) {
                return currentCapital;
            }

            // add projects we have enough capital for to our priority queue
            while (index < projects.length && projects[index][1] <= currentCapital) {
                pq.push(projects[index]);
                index++;
            }

            // pick our most profitable project with our given capital
            if (!pq.isEmpty()) {
                const project = pq.pop();
                currentCapital += project[0];
                k--;
            }
        }

        // if we finished adding all projects, then complete remaining projects (prioritized by profit)
        // until we hit K projects
        while (!pq.isEmpty() && k > 0) {
            const project = pq.pop();
            currentCapital += project[0];
            k--;
        }

        return currentCapital;
    }
}
