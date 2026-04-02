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
        return this.maxDepthHelper(root);
    }

    maxDepthHelper(node) {
        if (!node) {
            return 0;
        }

        return 1 + Math.max(this.maxDepthHelper(node.left), this.maxDepthHelper(node.right));
    }
}
