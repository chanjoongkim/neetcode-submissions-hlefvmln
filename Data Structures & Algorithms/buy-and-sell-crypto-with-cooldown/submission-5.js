class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const memo = {};
        return this.dfs(prices, 0, true, memo);
    }

    dfs(prices, i, canBuy, memo) {
        if (i >= prices.length) {
            return 0;
        }

        const key = i + '-' + canBuy;
        if (memo[key]) {
            return memo[key];
        }

        // cooldown (i.e. not doing anything at i, regardless of whether we can buy or not)
        const cooldown = this.dfs(prices, i + 1, canBuy, memo);
        let result = 0;
        if (canBuy) {
            const buy = this.dfs(prices, i + 1, false, memo) - prices[i];
            result = Math.max(buy, cooldown);
        } else {
            const sell = this.dfs(prices, i + 2, true, memo) + prices[i];
            result = Math.max(sell, cooldown);
        }
        memo[key] = result;
        return result;
    }
}
