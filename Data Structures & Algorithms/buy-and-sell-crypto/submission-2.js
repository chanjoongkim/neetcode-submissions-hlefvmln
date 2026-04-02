class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // two pointer approach
        if (!prices || prices.length === 1) {
            return 0;
        }

        let left = 0;
        let right = 1;
        let maxProfit = 0;
        while (right < prices.length) {
            // reset "left" if we encounter a new price that's lower than current left
            // and reset our right pointer as well
            if (prices[right] < prices[left]) {
                left = right;
                right = left + 1;
            }
            // else, see if we can make a max profit with the current right/sell price
            else {
                maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
                right++;
            }
        }

        return maxProfit;
    }
}
