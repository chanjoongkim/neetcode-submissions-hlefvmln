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
    goodNodes(root) {
        if (!root) {
            return 0;
        }
        this.result = 0;

        this.dfs(root, root.val);

        return this.result;
    }

    dfs(node, max) {
        // do a pre-order traversal of the tree
        // but pass along the "max" seen in the path so far.
        // if the current node is greater than max, then increment this.result
        // continue recursing the tree, and update the max we send if the current node.val is greater than max

        if (!node) {
            return;
        }

        // equal doesn't exclude node from being good
        if (node.val >= max) {
            this.result++;
            max = node.val;
        }
        this.dfs(node.left, max);
        this.dfs(node.right, max);
    }
}
