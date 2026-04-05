class Solution {
    /*
    prices = [10,1,5,6,7,1]

    price: 7

    lowestPrice = 1
    maxProfit = 6



    prices = [5,4,3,2,1]

    price: 1

    lowestPrice = 1
    maxProfit = 0
    */
    public int maxProfit(int[] prices) {
        // algorithm: go through prices from left to right, 
        // greedily keep track of the lowest price that we have seen so far.
        // at each price, compare the current price with the lowest price so far
        // if we have a new max profit, record that.

        int lowestPrice = Integer.MAX_VALUE;
        int maxProfit = 0;

        for (int price : prices) {
            if (price < lowestPrice) {
                lowestPrice = price;
            }

            if (price - lowestPrice > maxProfit) {
                maxProfit = price - lowestPrice;
            }
        }

        return maxProfit;
    }
}
