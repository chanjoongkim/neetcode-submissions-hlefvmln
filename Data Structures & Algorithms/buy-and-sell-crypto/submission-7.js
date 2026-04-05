class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowestPrice = Number.MAX_SAFE_INTEGER;
        let maxProfit = 0;

        for (let price of prices) {
            if (price < lowestPrice) {
                lowestPrice = price;
            }

            const currProfit = price - lowestPrice;
            if (currProfit > maxProfit) {
                maxProfit = currProfit;
            }
        }

        return maxProfit;
    }
}
