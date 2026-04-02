class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const memo = new Array(cost.length).fill(-1);
        
        return Math.min(this.minCostClimbingStairsHelper(cost, 0, memo), this.minCostClimbingStairsHelper(cost, 1, memo));
    }

    minCostClimbingStairsHelper(cost, i, memo) {
        if (i >= cost.length) {
            return 0;
        } else if (memo[i] !== -1) {
            return memo[i];
        }

        const minCost = cost[i] + Math.min(this.minCostClimbingStairsHelper(cost, i + 1, memo), this.minCostClimbingStairsHelper(cost, i + 2, memo));
        memo[i] = minCost;

        return minCost;
    }
}
