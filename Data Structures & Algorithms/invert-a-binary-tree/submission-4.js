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
        if (!node) {
            return node;
        }

        // flip left and right
        const temp = node.left;
        // get result of inverting the right side, then set that to current node's left
        node.left = this.invertTreeHelper(node.right);
        // get result of inverting the left side (using temp to get original), then set that to current node's right
        node.right = this.invertTreeHelper(temp);

        return node;
    }
}
