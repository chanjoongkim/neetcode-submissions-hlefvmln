class Solution {
    /**
     * @param {number[]} stoneValue
     * @return {string}
     */
    stoneGameIII(stoneValue) {
        const memo = new Map();
        const score = this.dfs(stoneValue, 0, memo);

        if (score === 0) {
            return 'Tie';
        }
        else if (score > 0) {
            return 'Alice';
        }
        else {
            return 'Bob';
        }
    }

    dfs(stones, index, memo) {
        if (index >= stones.length) {
            return 0;
        }

        
        if (memo.has(index)) {
            return memo.get(index);
        }

        // return the max difference we get from our current index
        // basically, get our 1/2/3 stone, then see what the score of the remaining stones is
        // pick the option where our point difference is the biggest
        const oneStone = stones[index] - this.dfs(stones, index + 1, memo);
        const twoStone = (stones[index] + (stones[index + 1] ?? 0)) - this.dfs(stones, index + 2, memo);
        const threeStone = (stones[index] + (stones[index + 1] ?? 0) + (stones[index + 2] ?? 0)) - this.dfs(stones, index + 3, memo);

        const result = Math.max(oneStone, twoStone, threeStone);

        memo.set(index, result);

        return result;
    }
}
