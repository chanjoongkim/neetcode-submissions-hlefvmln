/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {
        return this.createQuadTree(grid, 0, 0, grid.length - 1, grid[0].length - 1);
    }

    createQuadTree(grid, r1, c1, r2, c2) {
        if (r1 < 0 || r2 >= grid.length || c1 < 0 || c2 >= grid[0].length) {
            return null;
        }

        const node = new Node();

        // check if whole grid within [r1, c1] - [r2, c2] is all 1s or 0s
        // if so, then we create a leaf node and return it
        // else, create new node and recurse down the grid
        const sameValues = this.gridSameValue(grid, r1, c1, r2, c2);
        console.log(r1, c1, r2, c2, sameValues);

        // handle if subgrid is all the same values
        if (sameValues === -1 || sameValues === 1) {
            node.val = sameValues === 1;
            node.isLeaf = true;
            node.topLeft = null;
            node.topRight = null;
            node.bottomLeft = null;
            node.bottomRight = null;

            return node;
        }

        // else we need to recurse
        node.isLeaf = false;
        // can be anything
        node.val = false;

        // need to divide subgrid into 4 chunks and recurse
        const halfR = Math.floor((r2 + r1) / 2);
        const halfC = Math.floor((c2 + c1) / 2);
        node.topLeft = this.createQuadTree(grid, r1, c1, halfR, halfC);
        node.topRight = this.createQuadTree(grid, r1, halfC + 1, halfR, c2);
        node.bottomLeft = this.createQuadTree(grid, halfR + 1, c1, r2, halfC);
        node.bottomRight = this.createQuadTree(grid, halfR + 1, halfC + 1, r2, c2);

        return node;
    }

    gridSameValue(grid, r1, c1, r2, c2) {
        
        let sum = 0;
        for (let r = r1; r <= r2; r++) {
            for (let c = c1; c <= c2; c++) {
                sum += grid[r][c];
            }
        }

        // if sum = 0, that means the whole grid had 0s
        if (sum === 0) {
            return -1;
        }
        // if sum = ROW * COL, that means the whole grid had 1s
        else if (sum === (r2 - r1 + 1) * (c2 - c1 + 1)) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
