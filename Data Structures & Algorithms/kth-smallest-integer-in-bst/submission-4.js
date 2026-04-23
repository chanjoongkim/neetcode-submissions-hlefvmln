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

        const index = [1];

        return this.inOrderTraversal(root, index, k);
    }

    inOrderTraversal(node, index, k) {
        if (!node) {
            console.log('return null', node, index);
            return null;
        }

        console.log(node.val, index, k);

        const left = this.inOrderTraversal(node.left, index, k);

        if (left !== null) {
            return left;
        }

        console.log("mid", index);

        if (index[0] === k) {
            console.log('found', node.val);
            return node.val;
        }
        index[0]++;
        
        return this.inOrderTraversal(node.right, index, k);
    }
}
