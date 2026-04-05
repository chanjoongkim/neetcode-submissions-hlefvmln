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
    public TreeNode invertTree(TreeNode root) {
        return invertTreeHelper(root);
    }

    private TreeNode invertTreeHelper(TreeNode node) {
        if (node == null) {
            return null;
        }

        // TreeNode temp = node.left;
        TreeNode invertedRight = invertTreeHelper(node.right);
        TreeNode invertedLeft = invertTreeHelper(node.left);

        node.left = invertedRight;
        node.right = invertedLeft;

        return node;
    }
}
