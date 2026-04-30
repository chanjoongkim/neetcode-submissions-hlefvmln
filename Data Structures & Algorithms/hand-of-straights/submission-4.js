class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (!hand) {
            return true;
        }

        hand.sort((a, b) => a - b);

        const freqs = new Map();
        for (const num of hand) {
            freqs.set(num, (freqs.get(num) ?? 0) + 1);
        }

        console.log(hand);
        console.log(freqs);

        // attempt to build straights
        for (let i = 0; i < hand.length; i++) {
            let num = hand[i];
            console.log(num);
            if (freqs.get(num) === 0) {
                console.log('continue: ', num, i);
                continue;
            }
            freqs.set(num, freqs.get(num) - 1);

            // try to build straight starting at num
            for (let x = 0; x < groupSize - 1; x++) {
                // can't build straight
                if (!freqs.has(num + 1) || freqs.get(num + 1) === 0) {
                    console.log('false', num + 1);
                    return false;
                }

                num++;
                freqs.set(num, freqs.get(num) - 1);
            }
        }

        return true;
    }
}
