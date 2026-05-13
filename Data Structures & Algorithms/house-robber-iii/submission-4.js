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
    rob(root) {
        const memo = new Map();
        return this.dfs(root, true, memo);
    }

    dfs(node, canRob, memo) {
        if (!node) {
            return 0;
        }
        // basically we just need to memoize a node and the canRob variable, hacky way to do it
        let key = JSON.stringify(node) + '-' + canRob;

        if (memo.has(key)) {
            return memo.get(key);
        }

        // at each spot, I can either rob this house and skip the next one,
        // or skip this house and rob the next
        // return the max of both options

        let result = 0;

        if (canRob) {
            result = Math.max(node.val + this.dfs(node.left, false, memo) + this.dfs(node.right, false, memo), this.dfs(node.left, true, memo) + this.dfs(node.right, true, memo));
        }
        else {
            result = this.dfs(node.left, true, memo) + this.dfs(node.right, true, memo);
        }

        memo.set(key, result);

        return result;
    }
}
