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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root && !subRoot) {
            return true;
        } else if (!root || !subRoot) {
            return false;
        }

        // check if the subtrees are the same here
        if (root.val === subRoot.val) {
            if (this.isSameTree(root, subRoot)) {
                return true;
            }
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(node1, node2) {
        if (!node1 && !node2) {
            return true;
        } else if (!node1 || !node2) {
            return false;
        }

        return (node1.val === node2.val) && this.isSameTree(node1.left, node2.left) && this.isSameTree(node1.right, node2.right);
    }
}
