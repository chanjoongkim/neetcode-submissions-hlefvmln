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
        return this.dfs(root, memo);
    }

    dfs(node, memo) {
        if (!node) {
            return 0;
        }
        // basically we just need to memoize a node and the canRob variable, hacky way to do it
        // let key = JSON.stringify(node) + '-' + canRob;
        let key = node;

        if (memo.has(key)) {
            return memo.get(key);
        }

        // at each spot, I can either rob this house and skip the next one,
        // or skip this house and rob the next
        // return the max of both options

        let result = node.val;
        // rob this house and the grandchildren on the left
        if (node.left) {
            result += this.dfs(node.left.left, memo) + this.dfs(node.left.right, memo);
        }
        if (node.right) {
            result += this.dfs(node.right.right, memo) + this.dfs(node.right.left, memo);
        }
        result = Math.max(result, this.dfs(node.left, memo) + this.dfs(node.right, memo));

        // if (canRob) {
        //     result = Math.max(node.val + this.dfs(node.left, false, memo) + this.dfs(node.right, false, memo), this.dfs(node.left, true, memo) + this.dfs(node.right, true, memo));
        // }
        // else {
        //     result = this.dfs(node.left, true, memo) + this.dfs(node.right, true, memo);
        // }

        memo.set(key, result);

        return result;
    }
}
