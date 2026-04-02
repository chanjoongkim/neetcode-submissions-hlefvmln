/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) {
            return null;
        }

        const visited = new Set();
        const map = new Map();

        this.dfs(node, map, visited);

        return map.get(node);
    }

    dfs(node, map, visited) {
        if (!node) {
            return null;
        }

        visited.add(node);

        if (!map.has(node)) {
            map.set(node, new Node(node.val));
        }

        const copy = map.get(node);

        // do dfs on each of the neighbors
        for (const neighbor of node.neighbors) {
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val));
            }

            const neighborCopy = map.get(neighbor);
            copy.neighbors.push(neighborCopy);

            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                this.dfs(neighbor, map, visited);
            }
        }
    }
}
