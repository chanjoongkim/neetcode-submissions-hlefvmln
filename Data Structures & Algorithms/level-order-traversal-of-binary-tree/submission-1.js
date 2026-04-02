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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return [];
        }

        const result = [];
        const q = new Queue();

        q.enqueue(root);

        while (!q.isEmpty()) {
            const levelSize = q.size();
            const levelList = [];

            for (let i = 0; i < levelSize; i++) {
                const node = q.dequeue();
                levelList.push(node.val);

                if (node.left !== null) {
                    q.enqueue(node.left);
                }
                if (node.right !== null) {
                    q.enqueue(node.right);
                }
            }
            result.push(levelList);
        }

        return result;
    }
}
