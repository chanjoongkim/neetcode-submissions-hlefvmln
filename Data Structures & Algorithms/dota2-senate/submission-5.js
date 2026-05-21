class Solution {
    /**
     * @param {string} senate
     * @return {string}
     */
    predictPartyVictory(senate) {
        if (!senate) {
            return '';
        }

        const rQ = new Queue();
        const dQ = new Queue();

        for (let i = 0; i < senate.length; i++) {
            if (senate[i] === 'R') {
                rQ.push([i, senate[i]]);
            }
            else {
                dQ.push([i, senate[i]]);
            }
        }

        while (!rQ.isEmpty() && !dQ.isEmpty()) {
            // at the start of each turn, evaluate which senator should play first (smaller index)
            const r = rQ.pop();
            const d = dQ.pop();

            if (r[0] < d[0]) {
                // d is eliminated, so re-push r back to our queue
                // and increment index by N to simulate the next round
                rQ.push([r[0] + senate.length, r[1]]);
            }
            else {
                dQ.push([d[0] + senate.length, d[1]]);
            }
        }

        return rQ.isEmpty() ? 'Dire' : 'Radiant';
    }
}
