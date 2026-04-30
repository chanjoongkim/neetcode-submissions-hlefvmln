class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        if (!gas) {
            return 0;
        }

        const gasSum = gas.reduce((acc, curr) => acc + curr, 0);
        const costSum = cost.reduce((acc, curr) => acc + curr, 0);

        if (costSum > gasSum) {
            return -1;
        }

        let total = 0;
        let index = 0;

        for (let i = 0; i < gas.length; i++) {
            const delta = gas[i] - cost[i];
            total += delta;

            if (total < 0) {
                total = 0;
                index = i + 1;
            }
        }

        return index;
    }
}
