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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        const result = this.dfs(root, target);

        const res = [];
        this.print(root, res);
        console.log(res);

        return result;
    }

    print(node, res) {
        if (!node) {
            return;
        }
        console.log(node);
        res.push(node.val);
        this.print(node.left, res);
        this.print(node.right, res);
    }

    // do postorder traversal
    dfs(node, target) {
        if (!node) {
            return null;
        }

        node.left = this.dfs(node.left, target);
        node.right = this.dfs(node.right, target);

        if (node.val === target && node.left === null && node.right === null) {
            return null;
        }
        return node;
    }
}
