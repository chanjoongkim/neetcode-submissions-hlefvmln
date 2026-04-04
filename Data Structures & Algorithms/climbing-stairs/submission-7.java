class Solution {
    public int climbStairs(int n) {
        Map<Integer, Integer> memo = new HashMap<>();

        return climbStairsHelper(n, memo);
    }

    private int climbStairsHelper(int n, Map<Integer, Integer> memo) {
        if (n < 0) {
            return 0;
        } else if (n == 0) {
            return 1;
        } else if (memo.containsKey(n)) {
            return memo.get(n);
        }

        int ways = climbStairsHelper(n - 1, memo) + climbStairsHelper(n - 2, memo);

        memo.put(n, ways);

        return ways;
    }
}
