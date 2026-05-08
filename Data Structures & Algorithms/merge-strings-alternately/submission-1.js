class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const result = [];

        let w1 = 0;
        let w2 = 0;

        let useW1 = true;
        while (w1 < word1.length && w2 < word2.length) {
            if (useW1) {
                result.push(word1[w1]);
                w1++;
            }
            else {
                result.push(word2[w2]);
                w2++;
            }
            useW1 = !useW1;
        }

        while (w1 < word1.length) {
            result.push(word1[w1]);
            w1++;
        }

        while (w2 < word2.length) {
            result.push(word2[w2]);
            w2++;
        }

        return result.join('');
    }
}
