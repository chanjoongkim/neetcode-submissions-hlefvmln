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
        let preorderIndex = 0;
        const inorderMap = new Map(inorder.map((value, index) => [value, index]));

        function dfs(inorderLeft, inorderRight) {
            if (inorderLeft < 0 || inorderRight >= inorder.length || inorderLeft > inorderRight) {
                return null;
            }

            const node = new TreeNode(preorder[preorderIndex]);
            preorderIndex++;

            const inorderIndex = inorderMap.get(node.val);

            node.left = dfs(inorderLeft, inorderIndex - 1);
            node.right = dfs(inorderIndex + 1, inorderRight);

            return node;
        }

        return dfs(0, inorder.length - 1);
    }
}
