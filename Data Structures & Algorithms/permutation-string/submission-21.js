class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (!s1 || !s2) {
            return false;
        }

        const s1CharFreq = this.buildCharFreq(s1);

        // make a window of length s1, then iterate through s2 using the window and check if any of the
        // substrings have the same char freq as s1
        const s2SubCharFreq = this.buildCharFreq(s2.substring(0, s1.length - 1));

        let left = 0;
        let right = s1.length - 1;

        while (right < s2.length) {
            const c = s2.charAt(right);
            s2SubCharFreq.set(c, (s2SubCharFreq.get(c) ?? 0) + 1);
            if (this.charFreqsEqual(s1CharFreq, s2SubCharFreq)) {
                return true;
            }

            // remove left most char freq
            const cLeft = s2.charAt(left);
            s2SubCharFreq.set(cLeft, s2SubCharFreq.get(cLeft) - 1);
            if (s2SubCharFreq.get(cLeft) === 0) {
                s2SubCharFreq.delete(cLeft);
            }

            right++;
            left++;
        }

        return false;
    }

    buildCharFreq(s) {
        const map = new Map();
        for (let i = 0; i < s.length; i++) {
            const c = s.charAt(i);
            map.set(c, (map.get(c) ?? 0) + 1);
        }

        return map;
    }

    charFreqsEqual(s1CharFreq, s2CharFreq) {
        console.log(s1CharFreq, s2CharFreq);
        if (s1CharFreq.keys().length !== s2CharFreq.keys().length) {
            return false;
        }

        for (const [key, value] of s1CharFreq) {
            if (!s2CharFreq.has(key)) {
                return false;
            }
            if (s2CharFreq.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}
