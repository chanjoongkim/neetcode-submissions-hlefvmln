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
    public int diameterOfBinaryTree(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int[] result = new int[1];

        diameterOfBinaryTreeHelper(root, result);

        return result[0];
    }

    private int diameterOfBinaryTreeHelper(TreeNode node, int[] result) {
        if (node == null) {
            return -1;
        }

        int left = 1 + diameterOfBinaryTreeHelper(node.left, result);
        int right = 1 + diameterOfBinaryTreeHelper(node.right, result);

        result[0] = Math.max(result[0], left + right);

        return Math.max(left, right);
    }
}
