class Solution {
    /**
     * @param {number[]} piles
     * @return {boolean}
     */
    stoneGame(piles: number[]): boolean {
        const memo = new Map();
        const result = this.dfs(piles, 0, piles.length - 1, memo);

        return result > 0 ? true : false;
    }

    dfs(piles: number[], left: number, right: number, memo: Map<string, number>): number {
        if (left > right) {
            return 0;
        }

        if (left === right) {
            return piles[left];
        }

        const key = left + '-' + right;

        if (memo.has(key)) {
            return memo.get(key);
        }

        const takeLeft = piles[left] - this.dfs(piles, left + 1, right, memo);
        const takeRight = piles[right] - this.dfs(piles, left, right - 1, memo);

        memo.set(key, Math.max(takeLeft, takeRight));

        return memo.get(key);
    }
}
