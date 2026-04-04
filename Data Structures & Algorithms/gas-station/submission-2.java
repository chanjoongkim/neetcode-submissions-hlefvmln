class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int totalGas = 0;
        int totalCost = 0;
        for (int i = 0; i < gas.length; i++) {
            totalGas += gas[i];
            totalCost += cost[i];
        }

        if (totalCost > totalGas) {
            return -1;
        }

        int index = 0;
        int total = 0;
        for (int i = 0; i < gas.length; i++) {
            total += (gas[i] - cost[i]);
            if (total < 0) {
                index = i + 1;
                total = 0;
            }
        }

        return index;
    }
}
