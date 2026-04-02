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
    public int maxPathSum(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int[] res = new int[1];
        res[0] = Integer.MIN_VALUE;

        dfs(root, res);

        return res[0];
    }

    private int dfs(TreeNode node, int[] res) {
        if (node == null) {
            return 0;
        }

        int leftMax = dfs(node.left, res);
        int rightMax = dfs(node.right, res);

        // return max of:
        // leftMax + node.val + rightMax (max path goes from left to right including node)
        // leftMax + node (max path uses left and node but not right)
        // node + rightMax (max path uses node and right but not left)
        // node (don't use either left or right)
        // or 0? (skip this node altogether? this step might not be necessary)

        // I can only use leftMax + node.val + rightMax ONCE in the traversal
        // so see if using it now results in a max, otherwise skip it when assessing what to return

        if (leftMax + node.val + rightMax > res[0]) {
            res[0] = leftMax + node.val + rightMax;
        }

        int currMax = Math.max(node.val, Math.max(node.val + rightMax, node.val + leftMax));
        if (res[0] < currMax) {
            res[0] = currMax;
        }

        return currMax;
    }
}
