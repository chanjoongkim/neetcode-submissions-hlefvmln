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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if (!root) {
            return 0;
        }

        const list = [];

        this.inOrderTraversal(root, list);

        return list[k - 1];
    }

    inOrderTraversal(node, list) {
        if (!node) {
            return;
        }

        this.inOrderTraversal(node.left, list);

        list.push(node.val);
        
        this.inOrderTraversal(node.right, list);
    }
}
