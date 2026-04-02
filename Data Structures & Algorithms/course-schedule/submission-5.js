class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = {};
        // count number of prereqs for each course
        const degrees = {};
        for (let i = 0; i < numCourses; i++) {
            graph[i] = [];
            degrees[i] = 0;
        }
        prerequisites.forEach(([course, prereq]) => {
            graph[course].push(prereq);
            degrees[prereq] = degrees[prereq] + 1;
        })
        // for (const [course, prereq] of prerequisites) {
        //     graph[course].push(prereq);
        //     degrees[prereq] = degrees[prereq] + 1;
        // }

        const queue = new Queue();

        Object.keys(degrees).forEach((course) => {
            if (degrees[course] === 0) {
                queue.push(course);
            }
        });


        while (!queue.isEmpty()) {
            const course = queue.pop();
            const neighbors = graph[course];

            for (const neighbor of neighbors) {
                degrees[neighbor]--;
                if (degrees[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        console.log(degrees);

        for (const key of Object.keys(degrees)) {
            if (degrees[key] !== 0) {
                return false;
            }
        }

        return true;
    }
}
