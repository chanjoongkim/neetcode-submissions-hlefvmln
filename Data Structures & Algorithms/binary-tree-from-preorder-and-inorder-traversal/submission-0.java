/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder == null || preorder.length == 0) {
            return null;
        }

        Map<Integer, Integer> preIndices = new HashMap<>();
        Map<Integer, Integer> inIndices = new HashMap<>();

        // store val->index map for O(1) lookup
        for (int i = 0; i < preorder.length; i++) {
            preIndices.put(preorder[i], i);
            inIndices.put(inorder[i], i);
        }

        int[] preorderIndex = new int[1];

        // algorithm:
        // for a given val in preorder,
        // find the index in inorder for that val. 
        // all values remaining in the inorder array to the left of the preorder val is on the left subtree
        // and all remaining values in the inorder array to the right of the preorder val is on the right subtree
        // slice the array left/right as we go to determine "remaining" values left
        return buildTreeHelper(preorder, preorderIndex, inorder, inIndices, 0, inorder.length - 1);
    }

    private TreeNode buildTreeHelper(int[] preorder, int[] preorderIndex,
                                     int[] inorder, Map<Integer, Integer> inIndices, int inorderLeft, int inorderRight) {
        // boundary checks
        if (inorderRight >= inorder.length || inorderLeft < 0 || inorderLeft > inorderRight) {
            return null;
        }

        // grab first node from the preorder array
        int preorderVal = preorder[preorderIndex[0]];
        TreeNode node = new TreeNode(preorderVal);
        preorderIndex[0]++;

        // build up left and right subtrees
        node.left = buildTreeHelper(preorder, preorderIndex, inorder, inIndices, inorderLeft, inIndices.get(preorderVal) - 1);
        node.right = buildTreeHelper(preorder, preorderIndex, inorder, inIndices, inIndices.get(preorderVal) + 1, inorderRight);

        return node;
    }
}
