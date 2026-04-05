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
     * 
     * ex: [1,2,3,null,4,null,5]
     * 
     * queue: []
     * levelSize: 2
     * 
     * result: [1, 3, 5]
     */
    rightSideView(root) {
        if (!root) {
            return [];
        }

        // do a BFS traversal, but only add the first node of each level

        const queue = new Queue();
        const result = [];

        queue.enqueue(root);

        while (!queue.isEmpty()) {
            const levelSize = queue.size();
            let first = true;

            for (let i = 0; i < levelSize; i++) {
                const node = queue.dequeue();
                // only push the first node of each level
                if (first) {
                    result.push(node.val);
                    first = false;
                }

                // add children from right to left
                if (node.right !== null) {
                    queue.enqueue(node.right);
                }
                if (node.left !== null) {
                    queue.enqueue(node.left);
                }
            }
        }

        return result;
    }
}
