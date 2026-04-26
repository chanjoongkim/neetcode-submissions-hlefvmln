class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // do topological sort on the courses
        // basically a way to figure out dependencies in a graph,
        // and whether we can order the nodes given all the prereq constraints

        const dependencies = new Map();
        const prereqs = new Map();
        for (let i = 0; i < numCourses; i++) {
            dependencies.set(i, new Set());
            prereqs.set(i, 0);
        }

        // [a, b] means we must take b to take a
        for (const [a, b] of prerequisites) {
            // for each [a, b], add b to dependencies of a
            const deps = dependencies.get(a);
            deps.add(b);
            dependencies.set(a, deps);

            // increment the "degrees" of b,
            prereqs.set(b, prereqs.get(b) + 1);
        }

        

        // add all courses that have no dependencies (so we can take them first)
        // i.e. anything in prereqs with 0
        const queue = new Queue();
        for (const course of prereqs.keys()) {
            if (prereqs.get(course) === 0) {
                queue.enqueue(course);
            }
        }

        let finished = 0;
        while (!queue.isEmpty()) {
            const course = queue.dequeue();
            finished++;

            // go through dependencies and decrement the prereq count
            // add any prereqs that now have 0
            const deps = dependencies.get(course);
            for (const c of deps.keys()) {
                prereqs.set(c, prereqs.get(c) - 1);
                if (prereqs.get(c) === 0) {
                    queue.enqueue(c);
                }
            }
        }

        return finished === numCourses;
    }
}
