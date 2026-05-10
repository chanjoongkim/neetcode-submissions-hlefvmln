class StockSpanner {
    constructor() {
        this.stocks = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        // stack approach
        // keep [price, span] at the top of the stack where price is min
        // if top of stack is > price, then add [price, 1] to stack and return 1
        // else, pop from stack while top is <= price then add price after top is > price (or stack is empty) and return count
        // as we pop we add the previous element's span to our result
        // then store the [price, span] to top of stack
        // this is because for each price we store in our stack, we need to remember the "span" of that price, so as we pop elements
        // we accumulate spans for a given price

        let result = 1;
        if (this.stocks.length === 0 || this.stocks.at(-1)[0] > price) {
            this.stocks.push([price, 1]);
            return result;
        }

        while (this.stocks.length > 0 && this.stocks.at(-1)[0] <= price) {
            const [minPrice, span] = this.stocks.pop();
            result += span;
        }
        this.stocks.push([price, result]);
        return result;

        // // naive approach, brute force find number of stock prices (starting from end) that are <= price
        // this.stocks.push(price);

        // let result = 0;
        // let index = this.stocks.length - 1;
        // while (index >= 0 && this.stocks[index] <= price) {
        //     result++;
        //     index--;
        // }

        // return result;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
