class Solution {
    public int change(int amount, int[] coins) {
        Map<String, Integer> memo = new HashMap<>();
        return dfs(amount, coins, 0, memo);
    }

    private int dfs(int amount, int[] coins, int index, Map<String, Integer> memo) {
        if (amount == 0) {
            return 1;
        }

        if (amount < 0) {
            return 0; // ?
        }

        String key = amount + "-" + index;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        int combos = 0;
        for (int i = index; i < coins.length; i++) {
            int coin = coins[i];
            combos += dfs(amount - coin, coins, i, memo);
        }

        memo.put(key, combos);

        return combos;
    }
}
