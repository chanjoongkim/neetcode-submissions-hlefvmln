class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!s || !t) {
            return '';
        }

        if (t.length > s.length) {
            return '';
        }
        // algorithm:
        // build char freq map of string t
        // then using sliding window for string s
        // build up window (moving right) until we contain t,
        // then shift left while we still have a valid containment
        // once we no longer have a valid containment, then shift right and repeat
        // until we are done with the string
        const sChars = new Map();
        const tChars = new Map();
        for (const c of t) {
            tChars.set(c, (tChars.get(c) ?? 0) + 1);
        }

        let left = 0;
        let right = 0;

        let result = null;

        while (right < s.length) {
            const c = s.at(right);
            sChars.set(c, (sChars.get(c) ?? 0)+ 1);

            while (this.sContainsT(sChars, tChars)) {
                if (result === null) {
                    result = s.substring(left, right + 1);
                } else if (result.length > right - left + 1) {
                    result = s.substring(left, right + 1);
                }

                // remove left char and shift window left
                const leftC = s.at(left);
                sChars.set(leftC, sChars.get(leftC) - 1);
                left++;
            }

            right++;
        }

        return result === null ? '' : result;
    }

    sContainsT(sChars, tChars) {
        for (const[tKey, tValue] of tChars) {
            if (!sChars.has(tKey)) {
                return false;
            }
            if (sChars.get(tKey) < tValue) {
                return false;
            }
        }
        return true;
    }
}
