/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return [];
        }
        // BFS traversal

        const queue = new Queue();

        const result = [];

        queue.enqueue(root);

        while (!queue.isEmpty()) {
            const levelSize = queue.size();

            const level = [];
            for (let i = 0; i < levelSize; i++) {
                const node = queue.dequeue();
                level.push(node.val);

                if (node.left !== null) {
                    queue.enqueue(node.left);
                }
                if (node.right !== null) {
                    queue.enqueue(node.right);
                }
            }

            result.push(level);
        }

        return result;
    }
}
