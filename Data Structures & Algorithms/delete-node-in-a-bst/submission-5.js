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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        return this.deleteNodeHelper(root, key);
    }

    deleteNodeHelper(node, key) {
        if (!node) {
            return null;
        }

        // we've found the node we need to delete
        if (node.val === key) {
            // need to swap out the left-most node of the node's right subtree and swap it in place here?
            if (node.right !== null) {
                const leftMostNode = this.getLeftMostNode(node.right);
                if (leftMostNode !== node.right) {
                    leftMostNode.right = node.right;
                }

                leftMostNode.left = node.left;
                return leftMostNode;
            }
            // else if right subtree doesn't exist, then just pull up the node's left subtree to replace this node
            else {
                return node.left;
            }
        }
        else if (key < node.val) {
            node.left = this.deleteNodeHelper(node.left, key);
        }
        else {
            node.right = this.deleteNodeHelper(node.right, key);
        }

        return node;
    }

    getLeftMostNode(node) {
        // handle case where we only have 1 node
        if (node.left === null) {
            return node;
        }

        // we have at least 2 left nodes
        let grandParent = node;
        let parent = node.left;
        let leftChild = node.left.left;

        while (leftChild !== null) {
            grandParent = parent;
            parent = leftChild;
            leftChild = parent.left;
        }

        // if leftMostNode has right child, make sure it is now the grandparent's left child
        if (parent.right !== null) {
            grandParent.left = parent.right;
        }
        // else grandparent.left should be null
        else {
            grandParent.left = null;
        }
        return parent;
    }
}
