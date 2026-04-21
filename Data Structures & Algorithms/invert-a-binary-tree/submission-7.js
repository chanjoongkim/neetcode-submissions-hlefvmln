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
     * @return {TreeNode}
     */
    invertTree(root) {
        this.invertTreeHelper(root);

        return root;
    }

    invertTreeHelper(node) {
        if (!node) {
            return;
        }

        // recurse left and right
        this.invertTreeHelper(node.left);
        this.invertTreeHelper(node.right);
        
        // invert
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
    }
}
