class Solution {
    /**
     * @param {string[][]} equations
     * @param {number[]} values
     * @param {string[][]} queries
     * @return {number[]}
     */
    calcEquation(equations, values, queries) {
        const graph = new Map();

        for (let i = 0; i < values.length; i++) {
            const [a, b] = equations[i];
            const value = values[i];
            if (!graph.has(a)) {
                graph.set(a, new Set());
                graph.get(a).add([1, a]);
            }
            if (!graph.has(b)) {
                graph.set(b, new Set());
                graph.get(b).add([1, b]);
            }

            graph.get(a).add([value, b]);
            graph.get(b).add([1 / value, a]);
        }

        // for [c, d] in query, I need to find if c and d are connected (i.e. share a common variable)
        const result = [];
        for (const [c, d] of queries) {
            const common = this.bfs(graph, c, d);
            if (common === null) {
                result.push(-1);
            }
            else {
                result.push(common);
            }
        }

        return result;
    }

    // normal BFS is sufficient
    // we start from source and search for dest
    // along the way we keep track of the value of the path (multiplying all numbers in the path)
    // if there is a valid path from source to dest, that means they have a common variable
    // but we ultimately just care about the value of the path from source to dest
    bfs(graph, source, dest) {
        if (!graph.has(source) || !graph.has(dest)) {
            return null;
        }
        const q = new Queue();
        const visited = new Set();
        q.push([1, source]);
        visited.add(source);

        while (!q.isEmpty()) {
            const node = q.pop();

            if (node[1] === dest) {
                return node[0];
            }

            for (const [num, variable] of graph.get(node[1])) {
                if (!visited.has(variable)) {
                    visited.add(variable);
                    q.push([node[0] * num, variable]);
                }
            }
        }

        return null;
    }
}
