class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const s1CharFreq = Array.from({ length : 26}, () => 0);
        const s2CharFreq = Array.from( { length: 26}, () => 0);

        for (let i = 0; i < s1.length; i++) {
            s1CharFreq[s1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
            s2CharFreq[s2.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
        }

        let matches = 0;
        s1CharFreq.forEach((count, index) => {
            if (s2CharFreq[index] === count) {
                matches++;
            }
        });

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) {
                return true;
            }

            const rightIndex = s2.charCodeAt(right) - 'a'.charCodeAt(0);
            s2CharFreq[rightIndex] += 1;
            if (s1CharFreq[rightIndex] === s2CharFreq[rightIndex]) {
                matches++;
            } else if ((s1CharFreq[rightIndex] + 1) === s2CharFreq[rightIndex]) {
                matches--;
            }

            const leftIndex = s2.charCodeAt(left) - 'a'.charCodeAt(0);
            s2CharFreq[leftIndex] -= 1;
            if (s1CharFreq[leftIndex] === s2CharFreq[leftIndex]) {
                matches++;
            } else if ((s1CharFreq[leftIndex] - 1) === s2CharFreq[leftIndex]) {
                matches--;
            }

            left++;
        }

        return matches === 26;
    }
}
