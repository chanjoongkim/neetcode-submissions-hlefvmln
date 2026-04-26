class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const result = [];

        const prereqs = new Map();
        const dependencies = new Map();

        for (let i = 0; i < numCourses; i++) {
            prereqs.set(i, 0);
            dependencies.set(i, new Set());
        }

        for (const [a, b] of prerequisites) {
            prereqs.set(b, prereqs.get(b) + 1);
            
            const deps = dependencies.get(a);
            deps.add(b);
            dependencies.set(a, deps);
        }

        const queue = new Queue();
        let finished = 0;

        for (let i = 0; i < numCourses; i++) {
            if (prereqs.get(i) === 0) {
                queue.enqueue(i);
            }
        }

        while (!queue.isEmpty()) {
            const course = queue.dequeue();
            result.push(course);
            finished++;

            const deps = dependencies.get(course);
            for (const c of deps) {
                prereqs.set(c, prereqs.get(c) - 1);
                if (prereqs.get(c) === 0) {
                    queue.enqueue(c);
                }
            }
        }

        return finished === numCourses ? result.reverse() : [];
    }
}
