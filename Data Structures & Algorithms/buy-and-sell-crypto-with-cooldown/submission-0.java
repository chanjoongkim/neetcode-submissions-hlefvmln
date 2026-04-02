class Solution {
    public int maxProfit(int[] prices) {
        return dfs(prices, 0, true, -1);
    }

    private int dfs(int[] prices, int i, boolean canBuy, int boughtPrice) {
        if (i >= prices.length) {
            return 0;
        }

        // if I can buy, then take the max of recurse dfs calls of buying now or not buying (both moving i + 1)
        if (canBuy) {
            return Math.max(dfs(prices, i + 1, false, prices[i]), dfs(prices, i + 1, true, -1));
        } else {
            // take max of selling now and moving to i + 2, or not selling now and moving to i + 1
            return Math.max(prices[i] - boughtPrice + dfs(prices, i + 2, true, -1), dfs(prices, i + 1, false, boughtPrice));
        }
    }
}
