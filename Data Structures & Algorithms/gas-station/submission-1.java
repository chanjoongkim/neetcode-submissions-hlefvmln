class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        for (int i = 0; i < gas.length; i++) {
            if (gas[i] >= cost[i] && dfs(gas, cost, i, true, i, 0)) {
                return i;
            }
        }

        return -1;
    }

    private boolean dfs(int[] gas, int[] cost, int start, boolean first, int index, int currGas) {
        // loop around to first
        if (index == gas.length) {
            return dfs(gas, cost, start, first, 0, currGas);
        }

        // back to our starting index
        if (start == index && !first) {
            return true;
        }

        // check if we can make it to the next gas station
        if (currGas + gas[index] < cost[index]) {
            return false;
        }

        return dfs(gas, cost, start, false, index + 1, currGas + gas[index] - cost[index]);
    }
}
