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
    preorderTraversal(root) {
        const result = [];

        this.preorderTraversalHelper(root, result);

        return result;
    }

    preorderTraversalHelper(node, result) {
        if (!node) {
            return;
        }

        // preorder:
        // process node first
        // then traverse left
        // then traverse right

        result.push(node.val);
        this.preorderTraversalHelper(node.left, result);
        this.preorderTraversalHelper(node.right, result);
    }
}
