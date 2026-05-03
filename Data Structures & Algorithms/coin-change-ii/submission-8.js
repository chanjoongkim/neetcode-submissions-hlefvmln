class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const memo = new Map();
        return this.dfs(coins, 0, amount, memo);
    }

    dfs(coins, index, amount, memo) {
        if (amount === 0) {
            return 1;
        }

        if (amount < 0 || index >= coins.length) {
            return 0;
        }

        const key = index + '-' + amount;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let result = 0;

        result += this.dfs(coins, index, amount - coins[index], memo);
        result += this.dfs(coins, index + 1, amount, memo);

        // for (let i = index; i < coins.length; i++) {
        //     result += this.dfs(coins, i, amount - coins[i], memo);
        // }

        memo.set(key, result);

        return result;
    }
}
