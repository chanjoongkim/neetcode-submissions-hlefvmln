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
        for (let i = 0; i < numCourses; i++) {
            dependencies.set(i, new Set());
        }

        // [a, b] means we must take b to take a
        for (const [a, b] of prerequisites) {
            // for each [a, b], add b to dependencies of a
            const deps = dependencies.get(a);
            deps.add(b);
            dependencies.set(a, deps);
        }

        // add all courses that have no dependencies (so we can take them first)
        const queue = new Queue();
        const courses = new Array(numCourses).fill(false);
        for (const course of dependencies.keys()) {
            const deps = dependencies.get(course);
            if (deps.size === 0) {
                queue.enqueue(course);
                // courses[course] = true;
            }
        }

        while (!queue.isEmpty()) {
            // iterate through all the nodes at the current "level"
            const size = queue.size();

            for (let i = 0; i < size; i++) {
                const course = queue.dequeue();
                courses[course] = true;

                // go through dependencies and remove course from dependencies set
                // if dependencies set is 0, then add to queue
                for (const c of dependencies.keys()) {
                    const deps = dependencies.get(c);
                    if (deps.has(course)) {
                        deps.delete(course);
                        if (deps.size === 0) {
                            queue.enqueue(c);

                        }
                    }
                }
            }
        }

        // iterate through courses array and return false if any of them is false
        for (const courseTaken of courses) {
            if (!courseTaken) {
                return false;
            }
        }

        return true;
    }
}
