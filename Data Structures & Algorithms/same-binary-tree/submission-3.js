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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        return this.dfs(p, q);
    }

    dfs(p, q) {
        if (!p && !q) {
            return true;
        } else if (!p || !q) {
            return false;
        }

        if (p.val !== q.val) {
            return false;
        }

        return this.dfs(p.left, q.left) && this.dfs(p.right, q.right);
    }
}
