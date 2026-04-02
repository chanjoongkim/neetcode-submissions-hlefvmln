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
    public int goodNodes(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int[] res = new int[1];

        goodNodesHelper(root, root.val, res);

        return res[0];
    }

    private void goodNodesHelper(TreeNode node, int maxOfPath, int[] res) {
        if (node == null) {
            return;
        }

        if (node.val >= maxOfPath) {
            res[0] += 1;
        }

        // update maxOfPath with node.val if node.val is max
        goodNodesHelper(node.left, Math.max(maxOfPath, node.val), res);
        goodNodesHelper(node.right, Math.max(maxOfPath, node.val), res);
    }
}
