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

        dfs(root, result);

        return result[0];
    }

    private int dfs(TreeNode node, int[] result) {
        if (node == null) {
            return 0;
        }

        int left = dfs(node.left, result);
        int right = dfs(node.right, result);

        result[0] = Math.max(result[0], left + right);

        return 1 + Math.max(left, right);
    }
}
