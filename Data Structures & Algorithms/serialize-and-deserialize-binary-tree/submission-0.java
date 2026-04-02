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

public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        // convert tree into string using DFS
        StringBuilder sb = new StringBuilder();

        dfsSerialize(root, sb);

        // remove last ","
        sb.deleteCharAt(sb.length() - 1);

        return sb.toString();
    }

    private void dfsSerialize(TreeNode node, StringBuilder sb) {
        if (node == null) {
            sb.append("n,");
            return;
        }

        sb.append(node.val + ",");

        dfsSerialize(node.left, sb);
        dfsSerialize(node.right, sb);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        String[] vals = data.split(",");
        int[] index = new int[1];
        return dfsDeserialize(vals, index);
    }

    private TreeNode dfsDeserialize(String[] data, int[] index) {
        // should be impossible
        if (index[0] >= data.length) {
            return null;
        }

        // we're at a null node
        if (data[index[0]].equals("n")) {
            // I think I need to increment index[0] still
            index[0]++;
            return null;
        }

        TreeNode node = new TreeNode(Integer.parseInt(data[index[0]]));

        index[0]++;

        node.left = dfsDeserialize(data, index);
        node.right = dfsDeserialize(data, index);

        return node;
    }
}
