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
        const result = [];
        this.dfsSerialize(root, result);
        return result.join(',');
    }

    // do a pre-order traversal and add values (or nulls) as we encounter them to list
    dfsSerialize(node, result) {
        if (!node) {
            result.push('N');
            return;
        }

        result.push(node.val);

        this.dfsSerialize(node.left, result);
        this.dfsSerialize(node.right, result);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const dataList = data.split(',');
        return this.dfsDeserialize(dataList);
    }

    // do a pre-order traversal, but construct the tree as we go
    // should be the same order since we are doing the same order/traversal as our serialize function
    dfsDeserialize(dataList) {
        if (dataList[0] === 'N') {
            dataList.shift();
            return null;
        }

        const node = new TreeNode();
        const val = dataList.shift();
        node.val = Number.parseInt(val);

        node.left = this.dfsDeserialize(dataList);
        node.right = this.dfsDeserialize(dataList);

        return node;
    }
}
