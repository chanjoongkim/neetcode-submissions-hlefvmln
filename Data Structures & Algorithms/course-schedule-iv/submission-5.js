class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const graph = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));

        for (const [a, b] of prerequisites) {
            graph[a][b] = true;
        }

        for (let k = 0; k < numCourses; k++) {
            for (let i = 0; i < numCourses; i++) {
                for (let j = 0; j < numCourses; j++) {
                    if (graph[i][k] && graph[k][j]) {
                        graph[i][j] = true;
                    }
                }
            }
        }

        const result = [];
        for (const [u, v] of queries) {
            result.push(graph[u][v]);
        }

        return result;
    }
}
