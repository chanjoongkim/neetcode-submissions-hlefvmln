class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights);
        let r = weights.reduce((acc, curr) => acc + curr, 0);

        // do binary search between largest single weight, and the sum of all weights?
        for (let i = l; i <= r; i++) {
            if (this.canShip(weights, days, i)) {
                return i;
            }
        }

        return -1;
    }

    canShip(weights, days, capacity) {
        let curr = 0;

        for (const weight of weights) {
            if (curr + weight > capacity) {
                days--;
                curr = weight;
            }
            else {
                curr += weight;
            }
        }

        if (curr > 0) {
            days--;
        }

        return days >= 0;
    }
}
