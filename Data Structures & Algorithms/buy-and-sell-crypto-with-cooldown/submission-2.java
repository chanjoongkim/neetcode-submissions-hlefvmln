class Solution {
    public int maxProfit(int[] prices) {
        Map<String, Integer> memo = new HashMap<>();
        return dfs(prices, 0, true, -1, memo);
    }

    private int dfs(int[] prices, int i, boolean canBuy, int boughtPrice, Map<String, Integer> memo) {
        if (i >= prices.length) {
            return 0;
        }
        
        String key = i + "-" + canBuy + "-" + boughtPrice;

        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        // if I can buy, then take the max of recurse dfs calls of buying now or not buying (both moving i + 1)
        int result;
        if (canBuy) {
            result = Math.max(dfs(prices, i + 1, false, prices[i], memo), dfs(prices, i + 1, true, -1, memo));
        } else {
            // take max of selling now and moving to i + 2, or not selling now and moving to i + 1
            result = Math.max(prices[i] - boughtPrice + dfs(prices, i + 2, true, -1, memo), dfs(prices, i + 1, false, boughtPrice, memo));
        }
        memo.put(key, result);
        return result;
    }
}
