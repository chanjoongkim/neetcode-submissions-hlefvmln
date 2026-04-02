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
    public boolean isBalanced(TreeNode root) {
        if (root == null) {
            return true;
        }
        
        // "global"/member variable that stores whether there was an inbalanced node or not
        boolean[] res = { true };

        // do DFS to compute heights of tree
        dfs(root, 0, res);

        return res[0];
    }

    private int dfs(TreeNode node, int height, boolean[] res) {
        if (node == null) {
            return 0;
        }

        int leftHeight = dfs(node.left, height, res);
        int rightHeight = dfs(node.right, height, res);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            res[0] = false;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }
}
