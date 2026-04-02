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
    goodNodes(root) {
        if (!root) {
            return 0;
        }

        // BFS solution
        const q = new Queue();
        let res = 0;
        q.enqueue([root, root.val]);

        while (!q.isEmpty()) {
            const [node, maxOfPath] = q.dequeue();

            if (node.val >= maxOfPath) {
                res++;
            }

            if (node.left != null) {
                q.enqueue([node.left, Math.max(maxOfPath, node.val)]);
            }
            if (node.right != null) {
                q.enqueue([node.right, Math.max(maxOfPath, node.val)]);
            }
        }

        return res;
    }
}
