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
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if (root == null && subRoot == null) {
            // both roots are null, return true by default
            return true;
        } else if ((root == null && subRoot != null) || (root != null && subRoot == null)) {
            // if one root is null and the other is not, then return false because we can't recurse further down one of the trees
            return false;
        }

        return isSubtreeHelper(root, subRoot, root.val == subRoot.val);
    }
    private boolean isSubtreeHelper(TreeNode root, TreeNode subRoot, boolean traversingSubtree) {
        if (root == null && subRoot == null) {
            // both roots are null, return true by default
            return true;
        } else if ((root == null && subRoot != null) || (root != null && subRoot == null)) {
            // if one root is null and the other is not, then return false because we can't recurse further down one of the trees
            return false;
        }

        // both roots are not null
        // check if root values are the same
        // if so, then continue recursing down both left/right subtrees for both nodes
        // else, continue recursing down root tree but don't change subRoot node

        if (root.val == subRoot.val) {
            return (isSubtreeHelper(root.left, subRoot.left, true) && isSubtreeHelper(root.right, subRoot.right, true)) || (isSubtreeHelper(root.left, subRoot, false) || isSubtreeHelper(root.right, subRoot, false));
        } else {
            if (traversingSubtree) {
                return false;
            }
            return (isSubtreeHelper(root.left, subRoot, false) || isSubtreeHelper(root.right, subRoot, false));
        }
    }
}
