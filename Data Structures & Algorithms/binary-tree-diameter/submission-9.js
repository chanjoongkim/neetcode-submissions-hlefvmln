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
        const res = [0];

        this.dfs(root, res);

        return res[0];
    }
    
    /**
     * helper function that returns the length of the longest path accessible from the node
     */
    dfs(node, res) {
        if (!node) {
            return 0;
        }

        const left = this.dfs(node.left, res);
        const right = this.dfs(node.right, res);

        res[0] = Math.max(res[0], left + right);

        return 1 + Math.max(left, right);
    }
}
