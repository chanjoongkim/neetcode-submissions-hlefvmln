class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        hand.sort((a, b) => a - b);

        // greedily try to make straights of groupSize, starting at the smallest
        // remove elements from our array/hand as we build up straights
        
        while (hand.length > 0) {
            let num = hand[0];
            const straight = new Set();
            straight.add(num);
            hand.shift();
            // build up straight
            let i = 0;
            while (straight.size < groupSize && i < hand.length) {
                if (hand[i] === num + 1) {
                    num = hand[i];
                    straight.add(num);
                    hand.splice(i, 1);
                } else {
                    i++;
                }
            }

            if (straight.size !== groupSize) {
                return false;
            }
        }

        return true;
    }
}
