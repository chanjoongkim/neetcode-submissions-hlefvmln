class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const totalGas = gas.reduce((acc, curr) => acc + curr);
        const totalCost = cost.reduce((acc, curr) => acc + curr);

        if (totalCost > totalGas) {
            return -1;
        }

        let index = 0;
        let total = 0;
        for (let i = 0; i < gas.length; i++) {
            total += (gas[i] - cost[i]);
            if (total < 0) {
                index = i + 1;
                total = 0;
            }
        }

        return index;
    }
}
