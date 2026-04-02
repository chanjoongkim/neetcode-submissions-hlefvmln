class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int[] memo = new int[cost.length];
        for (int i = 0; i < memo.length; i++) {
            memo[i] = -1;
        }
        return Math.min(minCostClimbingStairsHelper(cost, 0, memo), minCostClimbingStairsHelper(cost, 1, memo));
    }

    private int minCostClimbingStairsHelper(int[] cost, int i, int[] memo) {
        if (i >= cost.length) {
            return 0;
        } else if (memo[i] != -1) {
            return memo[i];
        }

        int minCost = cost[i] + Math.min(minCostClimbingStairsHelper(cost, i + 1, memo), minCostClimbingStairsHelper(cost, i + 2, memo));
        memo[i] = minCost;
        return minCost;
    }
}
