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
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // BFS solution

        if (p == null || q == null) {
            return p == q;
        }

        Queue<TreeNode> pQ = new LinkedList<>();
        Queue<TreeNode> qQ = new LinkedList<>();

        pQ.offer(p);
        qQ.offer(q);

        while (!pQ.isEmpty() && !qQ.isEmpty()) {
            TreeNode pNode = pQ.poll();
            TreeNode qNode = qQ.poll();

            if (pNode.val != qNode.val) {
                return false;
            }

            // either p or q has a null left node while the other does not
            if (pNode.left == null && qNode.left != null || qNode.left != null && pNode.left == null) {
                return false;
            } else if (pNode.left != null && qNode.left != null) {
                pQ.offer(pNode.left);
                qQ.offer(qNode.left);
            } // else case means both left nodes are null, so we do nothing

            // either p or q has a null right node while the other does not
            if (pNode.right == null && qNode.right != null || qNode.right != null && pNode.right == null) {
                return false;
            } else if (pNode.right != null && qNode.right != null) {
                pQ.offer(pNode.right);
                qQ.offer(qNode.right);
            } // else case means both right nodes are null, so we do nothing
        }

        // if both are empty, then we're good
        // otherwise, that means we didn't finish traversing one of the trees so they're not euql
        return (pQ.size() == qQ.size());
    }
}
