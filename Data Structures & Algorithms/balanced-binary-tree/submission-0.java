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
    boolean isBalanced = true;
    public boolean isBalanced(TreeNode root) {
        if (root == null) {
            return true;
        }

        dfs(root, 0);

        return this.isBalanced;
    }

    private int dfs(TreeNode node, int height) {
        if (node == null) {
            return 0;
        }

        int leftHeight = dfs(node.left, height);
        int rightHeight = dfs(node.right, height);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            this.isBalanced = false;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }
}
