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
     * @return {TreeNode}
     */
    invertTree(root) {
        return this.invertTreeHelper(root);
    }

    invertTreeHelper(node) {
        // at every node, flip the left and right children, then recurse. Afterwards return the node.

        if (!node) {
            return node;
        }

        // flip left and right
        const temp = node.left;
        node.left = this.invertTreeHelper(node.right);
        node.right = this.invertTreeHelper(temp);

        return node;
    }
}
