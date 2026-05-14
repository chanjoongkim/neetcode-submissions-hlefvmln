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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        return this.dfs(root, target);
    }

    // do postorder traversal
    dfs(node, target) {
        if (!node) {
            return null;
        }

        // process left and right children first
        node.left = this.dfs(node.left, target);
        node.right = this.dfs(node.right, target);

        // if the children are both null and node is target, then return null (to nullify the parent's relationship)
        if (node.val === target && node.left === null && node.right === null) {
            return null;
        }

        // else return node as normal
        return node;
    }
}
