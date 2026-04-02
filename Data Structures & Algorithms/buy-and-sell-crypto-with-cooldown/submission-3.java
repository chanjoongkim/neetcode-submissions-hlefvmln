class Solution {
    public int maxProfit(int[] prices) {
        return dfs(prices, 0, true);
    }

    // return the current profit we are making overall at ith index
    private int dfs(int[] prices, int i, boolean canBuy) {
        if (i >= prices.length) {
            return 0;
        }
        
        if (canBuy) {
            // return max of buying now (and decrementing prices[i] since we're purchasing, and thus lowering our current profit)
            // or skipping (and not buying anything)
            return Math.max(dfs(prices, i + 1, false) - prices[i], dfs(prices, i + 1, true));
        } else {
            // take max of selling now (and incrementing our profit with prices[i] and skip to i + 2),
            // or skipping (and not selling anything)
            return Math.max(dfs(prices, i + 2, true) + prices[i], dfs(prices, i + 1, false));
        }
    }
}
