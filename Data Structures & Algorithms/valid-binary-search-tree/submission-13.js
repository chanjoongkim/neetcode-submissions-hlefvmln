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
     * @return {boolean}
     */
    isValidBST(root) {
        if (!root) {
            return true;
        }

        return this.isValidBSTHelper(root.left, [Number.MIN_SAFE_INTEGER, root.val]) && this.isValidBSTHelper(root.right, [root.val, Number.MAX_SAFE_INTEGER]);
    }

    isValidBSTHelper(node, range) {
        if (!node) {
            return true;
        }

        console.log(node.val, range);

        // check that node has correct value with respect to range
        if (node.val <= range[0] || node.val >= range[1]) {
            return false;
        }

        return this.isValidBSTHelper(node.left, [range[0], node.val]) && this.isValidBSTHelper(node.right, [node.val, range[1]]);
    }
}
