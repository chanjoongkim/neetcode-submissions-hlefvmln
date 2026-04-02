class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        if (!piles) {
            return -1;
        }

        piles.sort((a, b) => a - b);

        let minK = 1;
        let maxK = piles[piles.length - 1];

        let k = Number.MAX_VALUE;
        while (minK <= maxK) {
            const midK = Math.trunc((minK + maxK) / 2);

            if (this.canEatAllBananas(piles, h, midK)) {
                k = Math.min(k, midK);
                maxK = midK - 1;
            } else {
                minK = midK + 1;
            }
        }

        return k;
    }

    canEatAllBananas(piles, h, k) {
        const sum = piles.reduce((acc, curr) => 
            acc + Math.ceil(curr / k)
        , 0);

        return sum <= h;
    }
}
