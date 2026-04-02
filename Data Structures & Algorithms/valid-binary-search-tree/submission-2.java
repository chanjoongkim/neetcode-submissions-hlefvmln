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
    boolean validTree = true;
    public boolean isValidBST(TreeNode root) {
        if (root == null) {
            return true;
        }
        
        return dfs(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    private boolean dfs(TreeNode node, int left, int right) {
        if (node == null) {
            return true;
        }
        
        // node is outside the interval limits
        if (node.val <= left || node.val >= right) {
            return false;
        }

        // left < node < right
        return dfs(node.left, left, node.val) && dfs(node.right, node.val, right);
    }
}
