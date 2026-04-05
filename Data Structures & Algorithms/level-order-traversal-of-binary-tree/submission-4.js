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
     * 
     * ex: [1,2,3,4,5,6,7]
     * 
     * queue: []
     * levelNodes: []
     * levelSize: 0
     * 
     * result: [[1], [2, 3], [4, 5, 6, 7]]
     */
    levelOrder(root) {
        if (!root) {
            return [];
        }
        const result = [];
        const queue = new Queue();

        queue.enqueue(root);

        // while queue is not empty, we do a BFS on the tree
        // so at each iteration, we grab the current size of the queue to get that level's number of nodes
        // then do an inner for-loop over that current level, iterate through each node and add the left/right children 
        // for each node we iterate in the for-loop, add that to the current levels' traversal nodes
        // repeat until the queue is over
        while (!queue.isEmpty()) {
            const levelNodes = [];
            const levelSize = queue.size();

            for (let i = 0; i < levelSize; i++) {
                const node = queue.dequeue();
                levelNodes.push(node.val);

                if (node.left !== null) {
                    queue.enqueue(node.left);
                }
                if (node.right !== null) {
                    queue.enqueue(node.right);
                }
            }

            console.log(levelNodes);

            result.push(levelNodes);
        }

        return result;
    }
}
