class Solution {
    public int maxProfit(int[] prices) {
        if (prices == null || prices.length == 1) {
            return 0;
        }

        // two pointer (sliding window) approach:
        int left = 0;
        int right = 1;

        int maxProfit = 0;
        while (right < prices.length) {
            // "reset" our left pointer (and by extension our right)
            // when we encounter a price lower than our current "buy" price (left)
            if (prices[right] < prices[left]) {
                left = right;
                right = left + 1;
            } 
            // else, that means our "buy" price (left) is lower than right
            else {
                // see if selling at right results in a max profit
                maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
                // move right over one spot and repeat the process
                right++;
            }
        }

        return maxProfit;
    }
}
