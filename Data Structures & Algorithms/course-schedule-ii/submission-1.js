class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const graph = {};
        const degrees = {};
        for (let i = 0; i < numCourses; i++) {
            graph[i] = [];
            degrees[i] = 0;
        }

        // build up graph
        prerequisites.forEach(([course, prereq]) => {
            graph[prereq].push(course);
            degrees[course]++;
        })
        // for (const [course, prereq] of prerequisites) {
        //     graph[course].push(prereq);
        //     degrees[prereq]++;
        // }

        const queue = new Queue();
        Object.keys(degrees).forEach((course) => {
            if (degrees[course] === 0) {
                queue.push(course);
            }
        });

        console.log('graph', graph);
        console.log('degrees', degrees);
        console.log('queue', queue);

        let result = [];
        let finished = 0;
        while (!queue.isEmpty()) {
            const course = queue.pop();
            finished++;
            result.push(course);

            for (const neighbor of graph[course]) {
                degrees[neighbor]--;
                if (degrees[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        if (finished !== numCourses) {
            return [];
        }

        return result;
    }
}
