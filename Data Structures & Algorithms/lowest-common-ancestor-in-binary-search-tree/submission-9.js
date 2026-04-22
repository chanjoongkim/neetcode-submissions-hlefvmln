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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root) {
            return null;
        }

        // make p smaller
        if (p.val > q.val) {
            const temp = p;
            p = q;
            q = temp;
        }

        return this.dfs(root, p, q);
    }

    dfs(root, p, q) {
        // if p and q are on different sides of root.val, then we must have reached the LCA
        // else if p and q are < root.val, go left.
        // else, go right
        if (p.val === root.val || q.val === root.val) {
            return root;
        } else if (p.val < root.val && root.val < q.val) {
            return root;
        } else if (p.val < root.val && q.val < root.val) {
            return this.lowestCommonAncestor(root.left, p, q);
        } else {
            return this.lowestCommonAncestor(root.right, p, q);
        }
    }
}
