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
        // do BFS, but only add the first node of each level to our result

        if (!root) {
            return [];
        }

        const queue = new Queue();
        queue.enqueue(root);

        const result = [];

        while (!queue.isEmpty()) {
            console.log(queue);
            const levelSize = queue.size();
            let firstNode = true;

            for (let i = 0; i < levelSize; i++) {
                const node = queue.dequeue();
                if (firstNode) {
                    result.push(node.val);
                    firstNode = false;
                }

                if (node.right) {
                    queue.enqueue(node.right);
                }
                if (node.left) {
                    queue.enqueue(node.left);
                }
            }
        }

        return result;
    }
}
