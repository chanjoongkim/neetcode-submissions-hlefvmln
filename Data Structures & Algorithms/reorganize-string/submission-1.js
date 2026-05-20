class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        if (!s || s.length === 1) {
            return s;
        }
        const freqs = new Map();

        for (const c of s) {
            freqs.set(c, (freqs.get(c) ?? 0) + 1);
        }

        // store [c, freq] pairs
        const pq = new PriorityQueue((a, b) => b[1] - a[1]);

        for (const [k, v] of freqs) {
            pq.push([k, v]);
        }

        let result = [];
        const first = pq.pop();
        result.push(first[0]);
        first[1]--;
        if (first[1] > 0) {
            pq.push(first);
        }

        while (!pq.isEmpty()) {
            const mostFreq = pq.pop();
            if (result.at(-1) === mostFreq[0]) {
                // return if impossible
                if (pq.isEmpty()) {
                    return '';
                }
                const secondFreq = pq.pop();
                result.push(secondFreq[0]);
                secondFreq[1]--;

                if (secondFreq[1] > 0) {
                    pq.push(secondFreq);
                }
            }
            else {
                result.push(mostFreq[0]);
                mostFreq[1]--;
            }

            if (mostFreq[1] > 0) {
                pq.push(mostFreq);
            }
        }

        return result.join('');
    }
}
