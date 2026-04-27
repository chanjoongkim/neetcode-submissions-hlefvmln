class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     * 
     * ex: coins: [1, 5, 10], amount = 12
     * 
     * amount: 12
     * 
     */
    coinChange(coins, amount) {
        if (!coins || amount === 0) {
            return 0;
        }

        const memo = new Map();

        const result = this.coinChangeHelper(coins, amount, memo)

        return result === Number.MAX_SAFE_INTEGER ? -1 : result;
    }

    coinChangeHelper(coins, amount, memo) {
        if (memo.has(amount)) {
            return memo.get(amount);
        }

        if (amount === 0) {
            return 0;
        }

        // at each iteration, go through each coin denomination and see how many ways we can make change for the given amount
        // return/set the lowest value we get

        let result = Number.MAX_SAFE_INTEGER;
        for (const coin of coins) {
            if (amount - coin >= 0) {
                result = Math.min(result, 1 + this.coinChangeHelper(coins, amount - coin, memo));
            }
        }

        memo.set(amount, result);
        return result;
    }
}
