class StockSpanner {
    constructor() {
        this.stocks = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        this.stocks.push(price);

        let result = 0;
        let index = this.stocks.length - 1;
        while (index >= 0 && this.stocks[index] <= price) {
            result++;
            index--;
        }

        return result;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
