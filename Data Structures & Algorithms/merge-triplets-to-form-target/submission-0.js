class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        if (!triplets) {
            return false;
        }

        // filter triplets that have values greater than target
        const filteredTriplets = triplets.filter(([a, b, c]) => a <= target[0] && b <= target[1] && c <= target[2]);

        // find each target value
        let aFound = false;
        let bFound = false;
        let cFound = false;

        for (const [a, b, c] of filteredTriplets) {
            if (a === target[0]) {
                aFound = true;
            }
            if (b === target[1]) {
                bFound = true;
            }
            if (c === target[2]) {
                cFound = true;
            }
        }
        return aFound && bFound && cFound;
    }
}
