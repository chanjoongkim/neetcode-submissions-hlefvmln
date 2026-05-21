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

        const q = new Queue();
        q.push(0);

        let farthest = 0;

        while (!q.isEmpty()) {
            const pos = q.pop();

            if (pos === s.length - 1) {
                return true;
            }

            const start = Math.max(pos + minJump, farthest + 1);

            for (let i = start; i <= Math.min(pos + maxJump, s.length - 1); i++) {
                if (s[i] === '0') {
                    q.push(i);
                }
            }

            farthest = pos + maxJump;
        }

        return false;
    }
}
