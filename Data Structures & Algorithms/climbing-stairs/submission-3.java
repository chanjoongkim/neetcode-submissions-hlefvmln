class Solution {
    public int climbStairs(int n) {
        int[] memo = new int[n + 1];
        for (int i = 0; i < memo.length; i++) {
            memo[i] = -1;
        }

        return climbStairsHelper(n, memo);
    }

    private int climbStairsHelper(int n, int[] memo) {
        if (n == 0) {
            return 1;
        } else if (n < 0) {
            return 0;
        }

        if (memo[n] != -1) {
            return memo[n];
        }

        int ways = climbStairsHelper(n - 1, memo) + climbStairsHelper(n - 2, memo);
        memo[n] = ways;

        return ways;
    }
}
