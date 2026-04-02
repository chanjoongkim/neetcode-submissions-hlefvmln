class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        return this.dfs(prices, 0, true);
    }

    dfs(prices, i, canBuy) {
        if (i >= prices.length) {
            return 0;
        }

        // cooldown (i.e. not doing anything at i, regardless of whether we can buy or not)
        const cooldown = this.dfs(prices, i + 1, canBuy);
        if (canBuy) {
            const buy = this.dfs(prices, i + 1, false) - prices[i];
            return Math.max(buy, cooldown);
        } else {
            const sell = this.dfs(prices, i + 2, true) + prices[i];
            return Math.max(sell, cooldown);
        }
    }
}
