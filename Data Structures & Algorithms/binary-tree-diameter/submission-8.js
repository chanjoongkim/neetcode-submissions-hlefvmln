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
    diameterOfBinaryTree(root) {
        this.diameter = 0;

        this.dfs(root);

        return this.diameter;
    }
    
    /**
     * helper function that returns the length of the longest path accessible from the node
     */
    dfs(node) {
        if (!node) {
            return 0;
        }

        const left = this.dfs(node.left);
        const right = this.dfs(node.right);

        this.diameter = Math.max(this.diameter, left + right);

        return 1 + Math.max(left, right);
    }
}
