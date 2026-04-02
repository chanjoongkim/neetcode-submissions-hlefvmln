class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] memo = new int[amount + 1];
        for (int i = 0; i < memo.length; i++) {
            memo[i] = -1;
        }
        int res = coinChangeHelper(coins, amount, memo);
        return res >= 100000 ? -1 : res;
    }

    private int coinChangeHelper(int[] coins, int amount, int[] memo) {
        if (amount == 0) {
            return 0;
        }
        if (amount < 0) {
            return 100000;// ?
        }
        if (memo[amount] != -1) {
            return memo[amount];
        }

        int minCoins = 100000;
        for (int coin : coins) {
            minCoins = Math.min(minCoins, 1 + coinChangeHelper(coins, amount - coin, memo));
        }
        memo[amount] = minCoins;

        return minCoins;
    }
}
