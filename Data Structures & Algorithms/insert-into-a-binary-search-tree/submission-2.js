/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        // special case, if root is null, then we need to add a new "root" with the val
        if (!root) {
            return new TreeNode(val);
        }

        this.insertIntoBSTHelper(root, null, val);

        return root;
    }

    insertIntoBSTHelper(node, parent, val) {
        // if we reach a null spot, then we've reached the spot we need to add a new node to the parent
        if (!node) {
            if (val < parent.val) {
                parent.left = new TreeNode(val);
            }
            else {
                parent.right = new TreeNode(val);
            }
            return;
        }

        // traverse down the tree (either left or right) depending on the val and compared to the current node val
        if (val < node.val) {
            this.insertIntoBSTHelper(node.left, node, val);
        }
        else {
            this.insertIntoBSTHelper(node.right, node, val);
        }
    }
}
