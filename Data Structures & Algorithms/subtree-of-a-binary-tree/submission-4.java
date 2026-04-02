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
        // handle edge cases
        if (root == null && subRoot == null) {
            return true;
        } else if ((root == null && subRoot != null) || (root != null && subRoot == null)) {
            return false;
        }

        return isSubtreeHelper(root, subRoot, root.val == subRoot.val);
    }

    // need traversingSubtree to tell if we are actively testing the subTree or not.
    // if so, then every value between the roots needs to match
    // else, we are free to traverse root tree without nodes matching
    private boolean isSubtreeHelper(TreeNode root, TreeNode subRoot, boolean traversingSubtree) {
        if (root == null && subRoot == null) {
            // both roots are null, return true by default
            return true;
        } else if ((root == null && subRoot != null) || (root != null && subRoot == null)) {
            // if one root is null and the other is not, then return false because we can't recurse further down one of the trees
            return false;
        }

        if (root.val == subRoot.val) {
            // if values match, check if we can actively traverse through both subtrees on left/right. 
            // but also check what happens if we skip this node as the "root" of the subtree and instead try a different node in root's tree
            return (isSubtreeHelper(root.left, subRoot.left, true) && isSubtreeHelper(root.right, subRoot.right, true)) 
            || (isSubtreeHelper(root.left, subRoot, false) || isSubtreeHelper(root.right, subRoot, false));
        } else {
            // if values don't match and we were actively traversing the subtree, then immediately fail
            if (traversingSubtree) {
                return false;
            }
            // otherwise keep traversing root's tree and testing out subtree
            return (isSubtreeHelper(root.left, subRoot, false) || isSubtreeHelper(root.right, subRoot, false));
        }
    }
}
