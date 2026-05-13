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
    inorderTraversal(root) {
        const result = [];

        this.inorderTraversalHelper(root, result);

        return result;
    }

    inorderTraversalHelper(node, result) {
        if (!node) {
            return;
        }

        // traverse left first
        // then process node
        // then traverse right

        this.inorderTraversalHelper(node.left, result);
        result.push(node.val);
        this.inorderTraversalHelper(node.right, result);
    }
}
