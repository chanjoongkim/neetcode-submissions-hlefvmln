class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        // create a map of char and index for quick comparisons

        const map = new Map();
        for (let i = 0; i < order.length; i++) {
            map.set(order.at(i), i);
        }

        // compare each pair of words next to each other and ensure they are sorted
        for (let i = 0; i < words.length - 1; i++) {
            const word1 = words[i];
            const word2 = words[i + 1];

            if (!this.wordsSorted(word1, word2, map)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Does word1 come before word2
     */
    wordsSorted(word1, word2, map) {
        let index = 0;

        while (index < word1.length && index < word2.length) {
            // if same chars, then continue
            if (word1.at(index) === word2.at(index)) {
                index++;
            }
            // different chars
            else {
                // if word1 char comes AFTER word2 char in the map, then it is not lexicographically sorted
                return (map.get(word1.at(index)) < map.get(word2.at(index)));
            }
        }

        // if we ran out of word1, then that's okay
        // but if we ran out of word2, then not okay
        if (index >= word2.length) {
            return false;
        }

        return true;
    }
}
