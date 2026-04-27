class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        if (!cost) {
            return -1;
        }
        if (cost.length === 1) {
            return cost[0];
        }

        const result = new Array(cost.length + 1).fill(0);
        result[cost.length] = 0;
        result[cost.length - 1] = cost[cost.length - 1];
        result[cost.length - 2] = cost[cost.length - 2];

        for (let i = cost.length - 3; i >= 0; i--) {
            result[i] = cost[i] + Math.min(result[i + 1], result[i + 2]);
        }

        return Math.min(result[0], result[1]);
    }
}
