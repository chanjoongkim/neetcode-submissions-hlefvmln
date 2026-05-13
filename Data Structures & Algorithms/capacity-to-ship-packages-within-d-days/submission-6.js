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
        let result = r;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (this.canShip(weights, days, mid)) {
                result = Math.min(result, mid);
                // try reducing by half of the range
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        // for (let i = l; i <= r; i++) {
        //     if (this.canShip(weights, days, i)) {
        //         return i;
        //     }
        // }

        return result;
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
