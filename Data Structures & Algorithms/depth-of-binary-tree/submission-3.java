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
    class Node {
        TreeNode node;
        int depth;

        Node(TreeNode node, int depth) {
            this.node = node;
            this.depth = depth;    
        }
    }
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }

        // iterative DFS
        Stack<Node> stack = new Stack<>();
        stack.push(new Node(root, 1));

        int maxDepth = 0;
        // outer loop is the size of the "depth"
        while (!stack.isEmpty()) {
            // check top node from stack, and recurse through children
            // increment depth of children nodes
            Node node = stack.pop();

            maxDepth = Math.max(maxDepth, node.depth);

            if (node.node.left != null) {
                stack.push(new Node(node.node.left, node.depth + 1));
            }
            if (node.node.right != null) {
                stack.push(new Node(node.node.right, node.depth + 1));
            }
        }

        return maxDepth;
    }
}
