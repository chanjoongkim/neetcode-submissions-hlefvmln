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
        this.res = true;

        this.dfs(root);

        return this.res;
    }

    /**
     * recursively go through the tree, and return the height of the tree at each call
     * at each call we check if the left/right subtrees are balanced
     */
    dfs(node) {
        if (!node) {
            return 0;
        }

        const leftHeight = this.dfs(node.left);
        const rightHeight = this.dfs(node.right);

        // check if left/right subtrees are balanced and update the 
        // global variable if so
        if (Math.abs(leftHeight - rightHeight) > 1) {
            this.res = false;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }
}
