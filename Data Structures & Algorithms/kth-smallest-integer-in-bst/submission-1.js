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

        const res = [0];
        const index = [0];

        this.dfs(root, res, k, index);

        return res[0];
    }

    dfs(node, res, k, index) {
        if (!node) {
            return;
        }

        this.dfs(node.left, res, k, index);
        index[0]++;

        if (index[0] === k) {
            res[0] = node.val;
            return;
        }

        this.dfs(node.right, res, k, index);
    }
}
