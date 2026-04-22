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
    isBalanced(root) {
        const res = [true];

        this.dfs(root, res);

        return res[0];
    }

    /**
     * recursively go through the tree, and return the height of the tree at each call
     * at each call we check if the left/right subtrees are balanced
     */
    dfs(node, res) {
        if (!node) {
            return 0;
        }

        const leftHeight = this.dfs(node.left, res);
        const rightHeight = this.dfs(node.right, res);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            res[0] = false;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }
}
