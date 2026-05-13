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
     * @return {number[]}
     */
    postorderTraversal(root) {
        const result = [];

        this.postorderTraversalHelper(root, result);

        return result;
    }

    postorderTraversalHelper(node, result) {
        if (!node) {
            return;
        }

        // postorder
        // traverse left
        // traverse right
        // process node

        this.postorderTraversalHelper(node.left, result);
        this.postorderTraversalHelper(node.right, result);
        result.push(node.val);
    }
}
