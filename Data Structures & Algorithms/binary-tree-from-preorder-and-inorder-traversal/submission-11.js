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
        // build index maps
        // const preorderIndices = this.buildIndexMap(preorder);
        const inorderIndices = this.buildIndexMap(inorder);
        const preorderIndex = [0];

        return this.buildTreeHelper(preorder, preorderIndex, inorder, inorderIndices, 0, inorder.length - 1);
    }

    buildTreeHelper(preorder, preorderIndex, inorder, inorderIndices, inorderLeft, inorderRight) {
        if (preorderIndex < 0 || preorderIndex >= preorder.length || inorderLeft < 0 || inorderRight >= inorder.length || inorderLeft > inorderRight) {
            console.log('null', preorderIndex, inorderLeft, inorderRight);
            return null;
        }

        // console.log(preorder[preorderIndex], preorderIndex, inorderLeft, inorderRight);

        // algorithm:
        // build node from preorder index
        // find the corresponding inorder index of the node.val
        const node = new TreeNode(preorder[preorderIndex[0]]);
        preorderIndex[0]++;

        const inorderIndex = inorderIndices.get(node.val);
        // everything to the left of inorderIndex belongs to the left tree of node
        // everything to the right of inorderIndex belongs to the right tree of node

        node.left = this.buildTreeHelper(preorder, preorderIndex, inorder, inorderIndices, inorderLeft, inorderIndex - 1);
        node.right = this.buildTreeHelper(preorder, preorderIndex, inorder, inorderIndices, inorderIndex + 1, inorderRight);

        return node;
    }

    buildIndexMap(order) {
        return new Map(order.map((value, index) => [value, index]));
    }
}
