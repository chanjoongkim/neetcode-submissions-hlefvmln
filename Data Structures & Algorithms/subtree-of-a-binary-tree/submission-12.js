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
        
        // recurse through root's tree and check if it is equal to subRoot tree
        if (this.dfs(root, subRoot)) {
            return true;
        } else {
            return (this.isSubtree(root.left, subRoot)) || (this.isSubtree(root.right, subRoot));
        }
    }

    dfs(node, subRoot) {
        if (!node && !subRoot) {
            return true;
        } else if (!node || !subRoot) {
            return false;
        }

        if (node.val !== subRoot.val) {
            return false;
        }

        return this.dfs(node.left, subRoot.left) && this.dfs(node.right, subRoot.right);
    }
}
