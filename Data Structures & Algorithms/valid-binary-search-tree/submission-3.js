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
     * @return {boolean}
     */
    isValidBST(root) {
        if (!root) {
            return true;
        }

        const queue = new Queue();
        queue.enqueue([root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]);

        // BFS
        while (!queue.isEmpty()) {
            const [node, left, right] = queue.dequeue();

            if (node.val <= left || node.val >= right) {
                return false;
            }

            if (node.left != null) {
                queue.enqueue([node.left, left, node.val]);
            }
            if (node.right != null) {
                queue.enqueue([node.right, node.val, right]);
            }
        }

        return true;
    }
}
