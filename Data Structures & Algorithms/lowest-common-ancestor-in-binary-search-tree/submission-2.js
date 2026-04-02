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
        if (!root || !p || !q) {
            return null;
        }

        // ensure p < q
        if (p.val > q.val) {
            const tmp = p;
            p = q;
            q = tmp;
        }

        return this.lowestCommonAncestorHelper(root, p, q);
    }

    lowestCommonAncestorHelper(node, p, q) {
        if (!node) {
            return null;
        }

        if (node.val === p.val || node.val === q.val) {
            return node;
        }

        if (p.val < node.val && q.val < node.val) {
            return this.lowestCommonAncestorHelper(node.left, p, q);
        } else if (p.val > node.val && q.val > node.val) {
            return this.lowestCommonAncestorHelper(node.right, p, q);
        } else {
            return node;
        }
    }
}
