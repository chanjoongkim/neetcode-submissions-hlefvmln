class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;

        let buyPrice = prices[0];
        // greedily "rebuy" a stock if it gets lower
        // and sell when we can immediately make a profit
        for (const price of prices) {
            if (price < buyPrice) {
                buyPrice = price;
            }
            if (price - buyPrice > 0) {
                profit += price - buyPrice;
                buyPrice = price;
            }
        }

        return profit;
    }
}
