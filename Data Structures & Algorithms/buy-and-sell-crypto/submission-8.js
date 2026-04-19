class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (!prices) {
            return 0;
        }

        let lowestPrice = Number.MAX_SAFE_INTEGER;
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            const price = prices[i];

            lowestPrice = Math.min(lowestPrice, price);
            maxProfit = Math.max(maxProfit, price - lowestPrice);
        }

        return maxProfit;
    }
}
