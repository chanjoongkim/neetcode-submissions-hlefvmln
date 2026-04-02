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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const strings = [];
        this.dfsSerialize(root, strings);

        // remove last "," from last string
        strings[strings.length - 1] = strings[strings.length - 1].slice(0, -1);

        return strings.join("");
    }

    dfsSerialize(node, strings) {
        if (!node) {
            strings.push("n,");
            return;
        }

        strings.push(node.val + ",");

        this.dfsSerialize(node.left, strings);
        this.dfsSerialize(node.right, strings);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const vals = data.split(',');
        const index = [0];

        return this.dfsDeserialize(vals, index);
    }

    dfsDeserialize(vals, index) {
        if (vals[index[0]] === 'n') {
            index[0]++;
            return null;
        }

        const node = new TreeNode(Number(vals[index[0]]));
        index[0]++;
        node.left = this.dfsDeserialize(vals, index);
        node.right = this.dfsDeserialize(vals, index);

        return node;
    }
}
