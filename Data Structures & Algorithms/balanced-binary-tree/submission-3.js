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

        this.dfs(root, 0, res);

        return res[0];
    }

    dfs(node, height, res) {
        if (!node) {
            return 0;
        }

        const left = this.dfs(node.left, height + 1, res);
        const right = this.dfs(node.right, height + 1, res);

        if (Math.abs(left - right) > 1) {
            res[0] = false;
        }

        return 1 + Math.max(left, right);
    }
}
