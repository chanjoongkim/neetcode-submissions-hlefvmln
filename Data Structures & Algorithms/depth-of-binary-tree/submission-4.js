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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) {
            return 0;
        }

        // BFS down the tree, and increment by level
        let level = 0;

        const queue = [];
        queue.push(root);

        while (queue.length > 0) {
            const levelSize = queue.length;
            level++;

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();

                if (node.left !== null) {
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
            }
        }

        return level;
    }
}
