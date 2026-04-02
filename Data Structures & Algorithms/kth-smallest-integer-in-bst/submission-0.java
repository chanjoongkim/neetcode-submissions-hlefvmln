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
    public int kthSmallest(TreeNode root, int k) {
        // do an in-order traversal (DFS), and pass in an ArrayList and fill the values out as we see the nodes
        // return the kth index of the arraylist

        List<Integer> list = new ArrayList<>();
        dfs(root, list);

        return list.get(k-1);
    }

    private void dfs(TreeNode node, List<Integer> list) {
        if (node == null) {
            return;
        }

        // in-order traversal so the nodes are added in the correct order
        dfs(node.left, list);
        list.add(node.val);
        dfs(node.right, list);
    } 
}
