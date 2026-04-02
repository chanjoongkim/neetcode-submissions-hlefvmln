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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (!preorder) {
            return null;
        }

        const inorderIndices = {};
        inorder.forEach((val, index) => inorderIndices[val] = index);

        const preorderIndex = [];
        preorderIndex.push(0);

        return this.dfs(preorder, preorderIndex, inorder, inorderIndices, 0, inorder.length - 1);
    }

    dfs(preorder, preorderIndex, inorder, inorderIndices, inorderLeft, inorderRight) {
        if (inorderLeft < 0 || inorderRight >= inorder.length || inorderLeft > inorderRight) {
            return null;
        }

        const preorderVal = preorder[preorderIndex[0]];
        const node = new TreeNode(preorderVal)

        preorderIndex[0]++;

        node.left = this.dfs(preorder, preorderIndex, inorder, inorderIndices, inorderLeft, inorderIndices[preorderVal] - 1);
        node.right = this.dfs(preorder, preorderIndex, inorder, inorderIndices, inorderIndices[preorderVal] + 1, inorderRight);

        return node;
    }
}
