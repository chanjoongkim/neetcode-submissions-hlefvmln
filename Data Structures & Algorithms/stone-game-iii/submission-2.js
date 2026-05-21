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

        // return the max difference we get from our current index
        if (memo.has(index)) {
            return memo.get(index);
        }

        const oneStone = stones[index] - this.dfs(stones, index + 1, memo);
        const twoStone = (stones[index] + (stones[index + 1] ?? 0)) - this.dfs(stones, index + 2, memo);
        const threeStone = (stones[index] + (stones[index + 1] ?? 0) + (stones[index + 2] ?? 0)) - this.dfs(stones, index + 3, memo);

        const result = Math.max(oneStone, twoStone, threeStone);

        memo.set(index, result);

        return result;

        // if (aliceTurn) {
        //     const oneStone = this.dfs(stones, index + 1, false);
        //     oneStone[0] += stones[index];
        //     const twoStone = this.dfs(stones, index + 2, false);
        //     twoStone[0] += stones[index];
        //     twoStone[0] += (index + 1) < stones.length ? stones[index + 1] : 0;
        //     const threeStone = this.dfs(stones, index + 3, false);
        //     threeStone[0] += stones[index];
        //     threeStone[0] += (index + 1) < stones.length ? stones[index + 1] : 0;
        //     threeStone[0] += (index + 2) < stones.length ? stones[index + 2] : 0;

        //     console.log(index, aliceTurn, oneStone, twoStone, threeStone);
            
        //     // choose the option with the biggest delta between alice and bob score
        //     if ((oneStone[0] - oneStone[1]) > (twoStone[0] - twoStone[1]) && (oneStone[0] - oneStone[1]) > (threeStone[0] - threeStone[1])) {
        //         return oneStone;
        //     }
        //     else if ((twoStone[0] - twoStone[1]) > (oneStone[0] - oneStone[1]) && (twoStone[0] - twoStone[1]) > (threeStone[0] - threeStone[1])) {
        //         return twoStone;
        //     }
        //     else {
        //         return threeStone;
        //     }
        // }
        // else {
        //     const oneStone = this.dfs(stones, index + 1, true);
        //     oneStone[1] += stones[index];
        //     const twoStone = this.dfs(stones, index + 2, true);
        //     twoStone[1] += stones[index];
        //     twoStone[1] += (index + 1) < stones.length ? stones[index + 1] : 0;
        //     const threeStone = this.dfs(stones, index + 3, true);
        //     threeStone[1] += stones[index];
        //     threeStone[1] += (index + 1) < stones.length ? stones[index + 1] : 0;
        //     threeStone[1] += (index + 2) < stones.length ? stones[index + 2] : 0;

        //     console.log(index, aliceTurn, oneStone, twoStone, threeStone);
            
        //     if ((oneStone[1] - oneStone[0]) > (twoStone[1] - twoStone[0]) && (oneStone[1] - oneStone[1]) > (threeStone[1] - threeStone[0])) {
        //         return oneStone;
        //     }
        //     else if ((twoStone[1] - twoStone[0]) > (oneStone[1] - oneStone[0]) && (twoStone[1] - twoStone[0]) > (threeStone[1] - threeStone[0])) {
        //         return twoStone;
        //     }
        //     else {
        //         return threeStone;
        //     }
        // }
    }
}
