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
            return [0];
        }

        const result = [root.val];

        this.dfs(root, result);

        return result[0];
    }

    dfs(node, result) {
        if (!node) {
            return 0;
        }

        const left = this.dfs(node.left, result);
        const right = this.dfs(node.right, result);

        // only use left/right if the values are positive, otherwise ignore them by using 0
        const realLeft = left > 0 ? left : 0;
        const realRight = right > 0 ? right : 0;

        // check if max from left and right subtrees + node.val is largest
        const sum = realLeft + node.val + realRight;
        if (sum > result[0]) {
            result[0] = sum;
        }

        return node.val + Math.max(realLeft, realRight);
    }
}
