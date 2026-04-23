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
        // const result = new Array(10000).fill('X');
        const result = [''];

        this.dfsSerialize(root, result);
        console.log(result[0].substring(0, result[0].length - 1));
        return result[0].substring(0, result[0].length - 1);
    }

    dfsSerialize(node, result) {
        let string = result[0];
        if (!node) {
            string += 'N,';
            result[0] = string;

            return;
        }

        string += node.val + ',';
        result[0] = string;

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
