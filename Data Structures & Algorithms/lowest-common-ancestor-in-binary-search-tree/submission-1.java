/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || p == null || q == null) {
            return null;
        }

        // make p the lesser
        if (p.val > q.val) {
            TreeNode tmp = p;
            p = q;
            q = tmp;
        }

        return inOrderTraversal(root, p, q);
    }

    // we ensured that p < q
    private TreeNode inOrderTraversal(TreeNode node, TreeNode p, TreeNode q) {
        if (node == null) {
            return null;
        }

        // if node equals one of p or q, then by definition it has to be a LCA
        if (node.val == p.val || node.val == q.val) {
            return node;
        }

        // compare p and q vals with node.
        // by definition, LCA must have p and q on different sides (though technically LCA can equal one of these)
        // if both are < node.val, recurse left because LCA must be on that side
        // else if both are > node.val, recurse right
        // else we know p and q are on different sides

        if (p.val < node.val && q.val < node.val) {
            return inOrderTraversal(node.left, p, q);
        } else if (p.val > node.val && q.val > node.val) {
            return inOrderTraversal(node.right, p, q);
        } else {
            return node;
        }
    }
}
