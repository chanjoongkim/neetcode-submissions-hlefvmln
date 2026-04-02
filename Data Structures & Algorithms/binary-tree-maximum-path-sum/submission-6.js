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
     * @return {number}
     */
    maxPathSum(root) {
        if (!root) {
            return 0;
        }

        const res = [];
        res.push(Number.MIN_SAFE_INTEGER);

        this.dfs(root, res);

        return res[0];
    }

    dfs(node, res) {
        if (!node) {
            return 0;
        }

        const leftMax = this.dfs(node.left, res);
        const rightMax = this.dfs(node.right, res);

        if (leftMax + node.val + rightMax > res[0]) {
            res[0] = leftMax + node.val + rightMax;
        }

        const maxAtNode = Math.max(node.val, leftMax + node.val, rightMax + node.val);
        if (maxAtNode > res[0]) {
            res[0] = maxAtNode;
        }

        return maxAtNode;
    }
}
