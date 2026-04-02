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
    int diameter = 0;
    public int diameterOfBinaryTree(TreeNode root) {
        if (root == null) {
            return 0;
        }

        diameterOfBinaryTreeHelper(root);

        return diameter;
    }

    private int diameterOfBinaryTreeHelper(TreeNode node) {
        if (node == null) {
            return -1;
        }

        int left = 1 + diameterOfBinaryTreeHelper(node.left);
        int right = 1 + diameterOfBinaryTreeHelper(node.right);

        diameter = Math.max(diameter, left + right);

        return Math.max(left, right);
    }
}
