class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (!prices) {
            return 0;
        }

        if (prices.length === 1) {
            return 0;
        }

        const memo = new Map();

        return this.maxProfitHelper(prices, 0, true, memo);
    }

    maxProfitHelper(prices, i, canBuy, memo) {
        if (i >= prices.length) {
            return 0;
        }

        const key = i + '-' + canBuy;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let profit = 0;

        // at each index, we can do one of 3 things:
        // 1: do nothing
        // 2: if canBuy, then we buy the stock at i and recurse and see if we get a max profit
        // 3: else, we sell the stock at i and recurse i+2 (cooldown)

        // do nothing
        profit = Math.max(profit, this.maxProfitHelper(prices, i + 1, canBuy, memo));

        // we can buy
        if (canBuy) {
            profit = Math.max(profit, this.maxProfitHelper(prices, i + 1, false, memo) - prices[i]);
        }
        // sell (with cooldown)
        else {
            profit = Math.max(profit, this.maxProfitHelper(prices, i + 2, true, memo) + prices[i]);
        }

        memo.set(key, profit);
        return profit;
    }
}
