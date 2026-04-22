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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) {
            return true;
        } else if (!p || !q) {
            return false;
        }

        // return this.dfs(p, q);

        // BFS approach
        const pQueue = new Queue();
        const qQueue = new Queue();

        pQueue.enqueue(p);
        qQueue.enqueue(q);

        while (!pQueue.isEmpty() && !qQueue.isEmpty()) {
            const pNode = pQueue.dequeue();
            const qNode = qQueue.dequeue();

            if (pNode.val !== qNode.val) {
                return false;
            }
            
            if ((pNode.left && !qNode.left) || (!pNode.left && qNode.left)) {
                return false;
            } else if (pNode.left && qNode.left){
                pQueue.enqueue(pNode.left);
                qQueue.enqueue(qNode.left);
            }

            if ((pNode.right && !qNode.right) || (!pNode.right && qNode.right)) {
                return false;
            } else if (pNode.right && qNode.right){
                pQueue.enqueue(pNode.right);
                qQueue.enqueue(qNode.right);
            }
        }

        return pQueue.isEmpty() && qQueue.isEmpty();
    }

    dfs(p, q) {
        if (!p && !q) {
            return true;
        } else if (!p || !q) {
            return false;
        }

        if (p.val !== q.val) {
            return false;
        }

        return this.dfs(p.left, q.left) && this.dfs(p.right, q.right);
    }
}
