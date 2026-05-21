class Solution {
    /**
     * @param {string} s
     * @param {number} minJump
     * @param {number} maxJump
     * @return {boolean}
     */
    canReach(s, minJump, maxJump) {
        if (!s || s.at(-1) === '1' || s.at(0) !== '0') {
            return false;
        }

        // BFS
        const q = new Queue();
        q.push(0);

        // keep track of the "farthest" index we have jumped to so far
        let farthest = 0;

        while (!q.isEmpty()) {
            const pos = q.pop();

            if (pos === s.length - 1) {
                return true;
            }

            // start searching for new jump spots AFTER our last known farthest spot
            // to avoid adding positions already added to the queue
            const start = Math.max(pos + minJump, farthest + 1);

            // only check up until s.length - 1
            for (let i = start; i <= Math.min(pos + maxJump, s.length - 1); i++) {
                if (s[i] === '0') {
                    q.push(i);
                }
            }

            // update our farthest to the new furthest point we reached
            farthest = pos + maxJump;
        }

        return false;
    }
}
