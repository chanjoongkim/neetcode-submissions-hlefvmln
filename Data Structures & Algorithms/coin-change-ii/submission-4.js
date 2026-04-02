class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const memo = {};
        return this.dfs(amount, coins, 0, memo);
    }

    dfs(amount, coins, index, memo) {
        if (amount === 0) {
            return 1;
        }
        if (amount < 0) {
            return 0;
        }

        const key = amount + '-' + index;
        if (memo[key]) {
            return memo[key];
        }

        let combos = 0;
        for (let i = index; i < coins.length; i++) {
            const coin = coins[i];
            combos += this.dfs(amount - coin, coins, i, memo);
        }

        memo[key] = combos;
        return combos;
    }
}
