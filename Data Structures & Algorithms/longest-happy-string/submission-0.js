class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        // store [char, freq] pairs and prioritize max freq
        const pq = new PriorityQueue((a, b) => b[1] - a[1]);

        // previous is the last char(s) we added
        // if we double up, then we need to remember so we avoid triples
        let prev = null;
        const result = [];

        if (a !== 0) {
            pq.push(['a', a]);
        }
        if (b !== 0) {
            pq.push(['b', b]);
        }
        if (c !== 0) {
            pq.push(['c', c]);
        }
        
        while (!pq.isEmpty()) {
            const mostFreq = pq.pop();

            // we are at a double, so we need to use a different one
            if (prev && prev.length === 2 && prev.at(-1) === mostFreq[0]) {
                // if we don't have any more chars to use, then return what we have
                if (pq.isEmpty()) {
                    return result.join('');
                }
                const secondFreq = pq.pop();
                result.push(secondFreq[0]);
                secondFreq[1]--;

                if (secondFreq[1] > 0) {
                    pq.push(secondFreq);
                }
                prev = secondFreq[0];
            }
            else {
                result.push(mostFreq[0]);
                mostFreq[1]--;
                // if prev is single char and matches mostFreq that's okay
                if (prev && prev.at(-1) === mostFreq[0]) {
                    prev += mostFreq[0];
                }
                // else it's a different char and we can proceed
                else {
                    prev = mostFreq[0];
                }
            }

            if (mostFreq[1] > 0) {
                pq.push(mostFreq);
            }
        }

        return result.join('');
    }
}
