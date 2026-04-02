class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const memo = new Array(amount + 1).fill(-1);
        const result = this.coinChangeHelper(coins, amount, memo);
        return result === Number.MAX_SAFE_INTEGER ? -1 : result;
    }

    coinChangeHelper(coins, amount, memo) {
        if (amount === 0) return 0;
        if (amount < 0) return Number.MAX_SAFE_INTEGER;
        if (memo[amount] !== -1) return memo[amount];

        let minCoins = Number.MAX_SAFE_INTEGER;
        for (const coin of coins) {
            const result = this.coinChangeHelper(coins, amount - coin, memo);
            if (result !== Number.MAX_SAFE_INTEGER) {
                minCoins = Math.min(minCoins, 1 + result);
            }
        }

        memo[amount] = minCoins;
        return minCoins;
    }
}
