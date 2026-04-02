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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) {
            return [];
        }

        // do a DFS and pass in depth
        // but first time we see a new depth, add node val
        const res = [];
        this.dfs(root, 0, res);

        return res;
    }

    dfs(node, depth, res) {
        if (!node) {
            return;
        }

        // we should only do this once per depth I think?
        if (depth === res.length) {
            res.push(node.val);
        }

        this.dfs(node.right, depth + 1, res);
        this.dfs(node.left, depth + 1, res);
    }
}
