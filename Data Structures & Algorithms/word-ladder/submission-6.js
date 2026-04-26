class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        // build graph

        const graph = new Map();

        wordList.push(beginWord);
        for (const word of wordList) {
            graph.set(word, new Set());
        }

        // go through all combos of words
        for (let i = 0; i < wordList.length; i++) {
            for (let j = i + 1; j < wordList.length; j++) {
                const word1 = wordList[i];
                const word2 = wordList[j];
                if (this.canTransform(word1, word2)) {
                    graph.get(word1).add(word2);
                    graph.get(word2).add(word1);
                }
            }
        }

        // do BFS, starting from beginWord, until we hit endWord
        let distance = 0;
        const queue = new Queue();
        const visited = new Set();
        queue.enqueue(beginWord);

        while (!queue.isEmpty()) {
            const levelSize = queue.size();
            distance++;

            // go through all words at the current level
            for (let i = 0; i < levelSize; i++) {
                const word = queue.dequeue();
                visited.add(word);

                const neighbors = graph.get(word);
                for (const neighbor of neighbors) {
                    if (neighbor === endWord) {
                        return distance + 1;
                    }

                    if (!visited.has(neighbor)) {
                        queue.enqueue(neighbor);
                    }
                }
            }
        }

        return 0;
    }

    canTransform(word1, word2) {
        if (word1.length !== word2.length) {
            return false;
        }

        let diffChars = 0;

        for (let i = 0; i < word1.length; i++) {
            if (word1.at(i) !== word2.at(i)) {
                if (diffChars !== 0) {
                    return false;
                }
                diffChars++;
            }
        }

        return true;
    }
}
